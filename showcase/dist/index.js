/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@kasimirjs/embed/dist/ce/custom-element.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@kasimirjs/embed/dist/ce/custom-element.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KaCustomElement: () => (/* binding */ KaCustomElement)
/* harmony export */ });
/* harmony import */ var _tpl_templatify_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tpl/templatify.js */ "./node_modules/@kasimirjs/embed/dist/tpl/templatify.js");
/* harmony import */ var _tpl_template_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tpl/template.js */ "./node_modules/@kasimirjs/embed/dist/tpl/template.js");
/* harmony import */ var _core_query_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/query-select */ "./node_modules/@kasimirjs/embed/dist/core/query-select.js");
/* harmony import */ var _htmlFile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./htmlFile */ "./node_modules/@kasimirjs/embed/dist/ce/htmlFile.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




class KaCustomElement extends HTMLElement {
    constructor(props) {
        super(props);
        /**
         *
         * @protected
         * @var {KaTemplate}
         */
        this.__tpl = null;
        this.__isConnected = false;
    }
    /**
     * The Template associated with this Element
     *
     * @return {KaTemplate}
     */
    get $tpl() {
        return this.__tpl;
    }
    isConnected() {
        return this.isConnected;
    }
    /**
     * @abstract
     * @return {Promise<void>}
     */
    connected($tpl, $this) {
        return __awaiter(this, void 0, void 0, function* () {
            console.warn("connected() method not overridden in", this);
        });
    }
    connectedCallback() {
        return __awaiter(this, void 0, void 0, function* () {
            let callback = this.constructor.__callback;
            if (callback === null) {
            }
            else {
                callback.bind(this);
            }
            if (this.constructor.__tpl !== null) {
                let origTpl = this.constructor.__tpl;
                if (origTpl instanceof _htmlFile__WEBPACK_IMPORTED_MODULE_3__.RemoteTemplate)
                    origTpl = yield origTpl.load();
                let tpl = (0,_tpl_templatify_js__WEBPACK_IMPORTED_MODULE_0__.ka_templatify)(origTpl);
                if (this.constructor.__options.shadowDom === true) {
                    let shadowDom = this.attachShadow(this.constructor.__options.shadowDomOptions);
                    shadowDom.appendChild(tpl);
                }
                else {
                    this.appendChild(tpl);
                }
                this.__tpl = new _tpl_template_js__WEBPACK_IMPORTED_MODULE_1__.KaTemplate(tpl);
            }
            if (this.constructor.__options.waitEvent !== null) {
                let wd = this.constructor.__options.waitEvent.split("@");
                let eventName = wd[0];
                let target = document;
                if (wd.length === 2) {
                    target = (0,_core_query_select__WEBPACK_IMPORTED_MODULE_2__.ka_query_selector)(wd[1]);
                }
                target.addEventListener(eventName, (event) => __awaiter(this, void 0, void 0, function* () {
                    callback(this.$tpl, this);
                    this.__isConnected = true;
                }));
                return;
            }
            if (callback === null) {
                // Class: Call connected() Method
                yield this.connected(this.$tpl, this);
                this.__isConnected = true;
                return;
            }
            // Function
            callback(this.$tpl, this);
            this.__isConnected = true;
        });
    }
}
;


/***/ }),

/***/ "./node_modules/@kasimirjs/embed/dist/ce/html.js":
/*!*******************************************************!*\
  !*** ./node_modules/@kasimirjs/embed/dist/ce/html.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ka_html: () => (/* binding */ ka_html)
/* harmony export */ });
function ka_html(htmlContent) {
    if (htmlContent instanceof HTMLTemplateElement) {
        return htmlContent;
    }
    let e = document.createElement("template");
    e.innerHTML = htmlContent;
    return e;
}


/***/ }),

/***/ "./node_modules/@kasimirjs/embed/dist/ce/htmlFile.js":
/*!***********************************************************!*\
  !*** ./node_modules/@kasimirjs/embed/dist/ce/htmlFile.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RemoteTemplate: () => (/* binding */ RemoteTemplate)
/* harmony export */ });
/* harmony import */ var _loadHtml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadHtml */ "./node_modules/@kasimirjs/embed/dist/ce/loadHtml.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

class RemoteTemplate {
    constructor(url) {
        this.url = url;
        this.tpl = null;
    }
    /**
     *
     * @return {Promise<HTMLTemplateElement>}
     */
    load() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.tpl === null)
                this.tpl = yield (0,_loadHtml__WEBPACK_IMPORTED_MODULE_0__.ka_load_html)(this.url);
            return this.tpl;
        });
    }
}
/**
 * Load the Template on usage from remote location
 *
 *
 * @param url {string}
 * @return {RemoteTemplate}
 */
function htmlUrl(url) {
    return new RemoteTemplate(url);
}


/***/ }),

/***/ "./node_modules/@kasimirjs/embed/dist/ce/loadHtml.js":
/*!***********************************************************!*\
  !*** ./node_modules/@kasimirjs/embed/dist/ce/loadHtml.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ka_load_html: () => (/* binding */ ka_load_html)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/**
 *
 * @param url {string}
 * @return {Promise<HTMLTemplateElement>}
 */
function ka_load_html(url) {
    return __awaiter(this, void 0, void 0, function* () {
        let e = document.createElement("template");
        let result = yield fetch(url);
        if (!result.ok) {
            console.error(`[loadHtml] failed to load '${url}'`);
            throw `[loadHtml] failed to load '${url}'`;
        }
        let body = yield result.text();
        e.innerHTML = body;
        return e;
    });
}


/***/ }),

/***/ "./node_modules/@kasimirjs/embed/dist/core/apply.js":
/*!**********************************************************!*\
  !*** ./node_modules/@kasimirjs/embed/dist/core/apply.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ka_apply: () => (/* binding */ ka_apply)
/* harmony export */ });
/* harmony import */ var _eval_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eval.js */ "./node_modules/@kasimirjs/embed/dist/core/eval.js");
/* harmony import */ var _str_to_camelcase_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./str-to-camelcase.js */ "./node_modules/@kasimirjs/embed/dist/core/str-to-camelcase.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../functions */ "./node_modules/@kasimirjs/embed/dist/functions.js");
/* harmony import */ var _element_KaCustomFragment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../element/KaCustomFragment */ "./node_modules/@kasimirjs/embed/dist/element/KaCustomFragment.js");
/* harmony import */ var _element_ka_use__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../element/ka-use */ "./node_modules/@kasimirjs/embed/dist/element/ka-use.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





function ka_apply(selector, scope, recursive = false) {
    var _a;
    if (typeof selector === "string")
        selector = KaToolsV1.querySelector(selector);
    let attMap = {
        "textcontent": "textContent",
        "htmlcontent": "innerHTML",
        "innerhtml": "innerHTML",
    };
    for (let attName of selector.getAttributeNames()) {
        //console.log(attName);
        if (!attName.startsWith("ka.")) {
            continue;
        }
        let attVal = selector.getAttribute(attName);
        let attType = attName.split(".")[1];
        let attSelector = attName.split(".")[2];
        if (typeof attSelector === "undefined")
            attSelector = null;
        let registerEventHandler = function (element, action, callbackOrCode, scope) {
            if (typeof element._ka_on === "undefined")
                element._ka_on = {};
            if (typeof element._ka_on[action] === "undefined")
                element.addEventListener(action, (e) => element._ka_on[action](e));
            element._ka_on[action] = (e) => __awaiter(this, void 0, void 0, function* () {
                scope["$event"] = e;
                if (typeof callbackOrCode === "function") {
                    return callbackOrCode(e, element, scope);
                }
                else {
                    return (0,_eval_js__WEBPACK_IMPORTED_MODULE_0__.ka_eval)(callbackOrCode, scope, element);
                }
            });
        };
        if (attType === "on") {
            let attScope = Object.assign({ $scope: scope }, scope);
            if (attSelector !== null) {
                registerEventHandler(selector, attSelector, attVal, attScope);
            }
            else {
                let callBackMap = KaToolsV1.eval(attVal, attScope, selector);
                for (let curAction in callBackMap) {
                    registerEventHandler(selector, curAction, callBackMap[curAction], attScope);
                }
            }
            continue;
        }
        let r = null;
        if (typeof attVal !== "undefined" && typeof attVal !== null && attVal !== "")
            r = (0,_eval_js__WEBPACK_IMPORTED_MODULE_0__.ka_eval)(attVal, scope, selector);
        switch (attType) {
            case "use":
                if (!(selector instanceof _element_ka_use__WEBPACK_IMPORTED_MODULE_4__.KaUse)) {
                    let elem = new _element_ka_use__WEBPACK_IMPORTED_MODULE_4__.KaUse();
                    // Copy all attributes from selector to elem
                    for (let attName of selector.getAttributeNames()) {
                        elem.setAttribute(attName, selector.getAttribute(attName));
                    }
                    selector.replaceWith(elem);
                    selector = elem;
                }
                selector.use(r, scope);
                continue;
            case "become":
                if (!(r instanceof HTMLElement)) {
                    console.error("ka.become is only available on HTMLElements: Used on ", r, "found in ", selector);
                    throw "ka.become called on non HTMLElement.";
                }
                let attributes = selector.attributes;
                selector.replaceWith(r);
                continue;
            case "content":
                selector.setAttribute("ka.stop", "");
                if (typeof r === "string") {
                    selector.innerHTML = r;
                    continue;
                }
                if (!(r instanceof HTMLElement)) {
                    console.error("ka.content is only available on HTMLElements: Used on ", r, "found in ", selector);
                    throw "ka.content called on non HTMLElement.";
                }
                selector.append(r);
                continue;
            case "scope":
                if (!(r instanceof Object)) {
                    console.error("ka.scope must be object type <ka-use/> Elements: Value is ", r, "found in ", selector);
                    throw "ka.scope insuffient value";
                }
                selector.setScope(r);
                continue;
            case "stop":
                continue;
            case "debug":
                console.log("ka.debug on element", selector, "value:", r, "scope:", scope);
                continue;
            case "ref":
                if ((0,_functions__WEBPACK_IMPORTED_MODULE_2__.isUndefined)(scope.$ref))
                    scope.$ref = {};
                // Allow ref without parameter to use $ref.$last
                if (r !== null)
                    scope.$ref[r] = selector;
                scope.$ref.$last = selector;
                break;
            case "classlist":
                if (attSelector !== null) {
                    if (r === true) {
                        selector.classList.add(attSelector);
                    }
                    else {
                        selector.classList.remove(attSelector);
                    }
                    break;
                }
                if (typeof r === "string") {
                    // Split and add all classes
                    r = r.split(" ").filter((e) => e.trim() !== "");
                }
                if (Array.isArray(r)) {
                    for (let cname of r) {
                        if (cname.trim() === "")
                            continue;
                        selector.classList.add(cname);
                    }
                    break;
                }
                for (let cname in r) {
                    if (r[cname] === true) {
                        selector.classList.add(cname);
                    }
                    else {
                        selector.classList.remove(cname);
                    }
                }
                break;
            case "style":
                if (attSelector !== null && attSelector.startsWith("--")) {
                    selector.style.setProperty(attSelector, r);
                    break;
                }
                if (attSelector !== null) {
                    let val = r;
                    if (typeof val === "number" && ["left", "top", "height", "width", "bottom", "right", "line-height", "font-size"].indexOf(attSelector) !== -1)
                        val = val + "px";
                    selector.style[(0,_str_to_camelcase_js__WEBPACK_IMPORTED_MODULE_1__.ka_str_to_camel_case)(attSelector)] = val;
                    break;
                }
                for (let cname in r) {
                    let val = r[cname];
                    if (typeof val === "number" && ["left", "top", "height", "width", "bottom", "right", "line-height", "font-size"].indexOf(cname) !== -1)
                        val = val + "px";
                    selector.style[(0,_str_to_camelcase_js__WEBPACK_IMPORTED_MODULE_1__.ka_str_to_camel_case)(cname)] = val;
                }
                break;
            case "bindarray":
                if (attSelector === "default")
                    continue;
                if ((0,_functions__WEBPACK_IMPORTED_MODULE_2__.isUndefined)(r)) {
                    // Bind default values
                    if (selector.hasAttribute("ka.bind.default")) {
                        scope = Object.assign({ $scope: scope }, scope);
                        scope = Object.assign(Object.assign({ $scope: scope }, scope), { __curVal: (0,_eval_js__WEBPACK_IMPORTED_MODULE_0__.ka_eval)(selector.getAttribute("ka.bind.default"), scope, selector) });
                        (0,_eval_js__WEBPACK_IMPORTED_MODULE_0__.ka_eval)(`${attVal} = __curVal`, scope, selector);
                        r = scope.__curVal;
                    }
                }
                if (!Array.isArray(r)) {
                    console.error("kap:bindarr: Not an array!", r, selector);
                    return;
                }
                if (r.indexOf(selector.value) === -1)
                    selector.checked = false;
                else
                    selector.checked = true;
                if (typeof selector._kap_bind === "undefined") {
                    selector.addEventListener("change", (event) => {
                        let arr = (0,_eval_js__WEBPACK_IMPORTED_MODULE_0__.ka_eval)(attVal, scope, selector);
                        if (arr.indexOf(selector.value) === -1 && selector.checked)
                            arr.push(selector.value);
                        if (arr.indexOf(selector.value) !== -1 && !selector.checked)
                            arr = arr.filter((e) => e !== selector.value);
                        scope = Object.assign(Object.assign({ $scope: scope }, scope), { __curVal: arr });
                        (0,_eval_js__WEBPACK_IMPORTED_MODULE_0__.ka_eval)(`${attVal} = __curVal`, scope, selector);
                        if (scope.$on && scope.$on.change)
                            scope.$on.change(event);
                    });
                    selector._kap_bind = true;
                }
                break;
            case "bind":
                if (attSelector === "default")
                    continue;
                if ((0,_functions__WEBPACK_IMPORTED_MODULE_2__.isUndefined)(r)) {
                    // Bind default values
                    if ((0,_functions__WEBPACK_IMPORTED_MODULE_2__.isset)(selector.value)) {
                        scope = Object.assign(Object.assign({ $scope: scope }, scope), { __curVal: selector.value });
                        (0,_eval_js__WEBPACK_IMPORTED_MODULE_0__.ka_eval)(`${attVal} = __curVal`, scope, selector);
                        r = scope.__curVal;
                    }
                    if (selector.hasAttribute("ka.bind.default")) {
                        scope = Object.assign({ $scope: scope }, scope);
                        scope = Object.assign(Object.assign({ $scope: scope }, scope), { __curVal: (0,_eval_js__WEBPACK_IMPORTED_MODULE_0__.ka_eval)(selector.getAttribute("ka.bind.default"), scope, selector) });
                        (0,_eval_js__WEBPACK_IMPORTED_MODULE_0__.ka_eval)(`${attVal} = __curVal`, scope, selector);
                        r = scope.__curVal;
                    }
                }
                if (selector.type === "checkbox" || selector.type === "radio") {
                    if (selector.hasAttribute("value")) {
                        if (r === selector.getAttribute("value"))
                            selector.checked = true;
                        else
                            selector.checked = false;
                    }
                    else {
                        if (r === true)
                            selector.checked = true;
                        else
                            selector.checked = false;
                    }
                }
                else {
                    selector.value = typeof r !== "undefined" ? r : "";
                }
                if (typeof selector._kap_bind === "undefined") {
                    selector.addEventListener("change", (event) => {
                        let value = null;
                        if (selector.type === "checkbox" || selector.type === "radio") {
                            if (selector.hasAttribute("value")) {
                                if (selector.checked === false)
                                    return;
                                value = selector.getAttribute("value");
                            }
                            else {
                                value = selector.checked;
                            }
                        }
                        else {
                            value = selector.value;
                        }
                        scope = Object.assign(Object.assign({ $scope: scope }, scope), { __curVal: value });
                        (0,_eval_js__WEBPACK_IMPORTED_MODULE_0__.ka_eval)(`${attVal} = __curVal`, scope, selector);
                        if (scope.$on && scope.$on.change)
                            scope.$on.change(event);
                    });
                    selector.addEventListener("keyup", (event) => {
                        scope = Object.assign(Object.assign({ $scope: scope }, scope), { __curVal: selector.value });
                        (0,_eval_js__WEBPACK_IMPORTED_MODULE_0__.ka_eval)(`${attVal} = __curVal`, scope, selector);
                        if (scope.$on && scope.$on.change)
                            scope.$on.change(event);
                    });
                    selector._kap_bind = true;
                }
                break;
            case "options":
                let value = selector.value;
                selector.innerHTML = "";
                for (let option in r) {
                    if (!Array.isArray(r)) {
                        // Object key => value value => text
                        selector.appendChild(new Option(r[option], option));
                    }
                    else {
                        // Array
                        if (((_a = r[option]) === null || _a === void 0 ? void 0 : _a.text) !== undefined) {
                            selector.appendChild(new Option(r[option].text, r[option].value));
                        }
                        else {
                            // Array value and text will be array value
                            selector.appendChild(new Option(r[option], r[option]));
                        }
                    }
                }
                if (value !== null)
                    selector.value = value;
                break;
            case "attr":
                if (attSelector !== null) {
                    if (r === null || r === false) {
                        selector.removeAttribute(attSelector);
                    }
                    else {
                        selector.setAttribute(attSelector, r);
                    }
                    break;
                }
                for (let cname in r) {
                    if (r[cname] === null || r[cname] === false) {
                        selector.removeAttribute(cname);
                    }
                    else {
                        selector.setAttribute(cname, r[cname]);
                    }
                }
                break;
            case "prop":
                if (attSelector !== null) {
                    // Set Property directly
                    selector[(0,_str_to_camelcase_js__WEBPACK_IMPORTED_MODULE_1__.ka_str_to_camel_case)(attSelector)] = r;
                    break;
                }
                for (let cname in r) {
                    selector[(0,_str_to_camelcase_js__WEBPACK_IMPORTED_MODULE_1__.ka_str_to_camel_case)(cname)] = r[cname];
                }
                break;
            default:
                if (typeof attMap[attType] !== "undefined")
                    attType = attMap[attType];
                if (typeof selector[attType] === "undefined") {
                    console.warn("apply(): trying to set undefined property ", attType, "on element", selector);
                }
                selector[attType] = r;
                break;
        }
    }
    if (recursive) {
        for (let e of selector.children) {
            ka_apply(e, scope, recursive);
        }
    }
}


/***/ }),

/***/ "./node_modules/@kasimirjs/embed/dist/core/create-element.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@kasimirjs/embed/dist/core/create-element.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ka_create_element: () => (/* binding */ ka_create_element)
/* harmony export */ });
/**
 * Create a new Element
 *
 * @param tagName {string}      The Tag Name
 * @param attributes {string<string>}   Attributes to set initially
 * @param appendToElement {HTMLElement}
 * @param children {HTMLElement[]}
 * @return HTMLElement
 */
function ka_create_element(tagName, attributes = null, children = null, appendToElement = null) {
    let e = document.createElement(tagName);
    if (attributes === null)
        attributes = {};
    for (let attName in attributes) {
        e.setAttribute(attName, attributes[attName]);
    }
    if (children instanceof NodeList) {
        children = Array.from(children);
    }
    if (Array.isArray(children)) {
        for (let ce of children) {
            e.appendChild(ce);
        }
    }
    if (typeof children === "string") {
        e.innerText = children;
    }
    if (appendToElement !== null) {
        appendToElement.appendChild(e);
    }
    return e;
}


/***/ }),

/***/ "./node_modules/@kasimirjs/embed/dist/core/debounce.js":
/*!*************************************************************!*\
  !*** ./node_modules/@kasimirjs/embed/dist/core/debounce.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ka_debounce: () => (/* binding */ ka_debounce)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const _debounceInterval = { i: null, time: null };
/**
 * Debounce a event
 *
 *
 *
 * @param min   Minimum Time to wait
 * @param max   Trigger event automatically after this time
 * @return {Promise<unknown>}
 */
function ka_debounce(min, max = null) {
    return __awaiter(this, void 0, void 0, function* () {
        if (max === null)
            max = min;
        let dbi = _debounceInterval;
        return new Promise((resolve) => {
            if (dbi.time < (+new Date()) - max && dbi.i !== null) {
                return resolve();
            }
            if (dbi.i !== null) {
                return;
            }
            dbi.time = (+new Date());
            dbi.i = window.setTimeout(() => {
                dbi.i = null;
                return resolve();
            }, min);
        });
    });
}


/***/ }),

/***/ "./node_modules/@kasimirjs/embed/dist/core/debouncer.js":
/*!**************************************************************!*\
  !*** ./node_modules/@kasimirjs/embed/dist/core/debouncer.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Debouncer: () => (/* binding */ Debouncer)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Debouncer_resolve, _Debouncer_interval, _Debouncer_time;
class Debouncer {
    constructor(min = 100, max = null) {
        this.min = min;
        this.max = max;
        _Debouncer_resolve.set(this, []);
        _Debouncer_interval.set(this, null);
        _Debouncer_time.set(this, null);
    }
    debounce(min = this.min, max = this.max) {
        return __awaiter(this, void 0, void 0, function* () {
            if (max === null)
                max = min;
            if (__classPrivateFieldGet(this, _Debouncer_interval, "f") !== null) {
                window.clearInterval(__classPrivateFieldGet(this, _Debouncer_interval, "f"));
            }
            __classPrivateFieldSet(this, _Debouncer_interval, window.setInterval(() => {
                __classPrivateFieldGet(this, _Debouncer_resolve, "f").forEach(r => r());
                __classPrivateFieldSet(this, _Debouncer_resolve, [], "f");
                window.clearInterval(__classPrivateFieldGet(this, _Debouncer_interval, "f"));
            }, min), "f");
            return new Promise((resolve) => {
                __classPrivateFieldGet(this, _Debouncer_resolve, "f").push(resolve);
            });
        });
    }
}
_Debouncer_resolve = new WeakMap(), _Debouncer_interval = new WeakMap(), _Debouncer_time = new WeakMap();


/***/ }),

/***/ "./node_modules/@kasimirjs/embed/dist/core/dom-ready.js":
/*!**************************************************************!*\
  !*** ./node_modules/@kasimirjs/embed/dist/core/dom-ready.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ka_dom_ready: () => (/* binding */ ka_dom_ready)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/**
 * Wait for DomContentLoaded or resolve immediate
 *
 * <example>
 * await MicxToolsVx.domReady();
 * </example>
 *
 * @return {Promise<string>}
 */
function ka_dom_ready() {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve) => {
            if (document.readyState === "complete" || document.readyState === "interactive")
                return resolve("loaded");
            document.addEventListener("DOMContentLoaded", () => resolve('DOMContentLoaded'));
        });
    });
}


/***/ }),

/***/ "./node_modules/@kasimirjs/embed/dist/core/elwalk.js":
/*!***********************************************************!*\
  !*** ./node_modules/@kasimirjs/embed/dist/core/elwalk.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ka_elwalk: () => (/* binding */ ka_elwalk)
/* harmony export */ });
/**
 *
 * @param {HTMLElement} elem
 * @param fn
 * @param recursive
 */
function ka_elwalk(elem, fn, recursive = false, includeFirst = false) {
    if (Array.isArray(elem))
        elem.children = elem;
    if (typeof elem.children === "undefined")
        return;
    if (includeFirst && elem instanceof HTMLElement) {
        let ret = fn(elem);
        if (ret === false)
            return false;
    }
    for (let child of elem.children) {
        let ret = fn(child);
        if (ret === false)
            continue; // No recursiion
        if (recursive && typeof child.children !== "undefined")
            ka_elwalk(child, fn, recursive);
    }
}


/***/ }),

/***/ "./node_modules/@kasimirjs/embed/dist/core/eval.js":
/*!*********************************************************!*\
  !*** ./node_modules/@kasimirjs/embed/dist/core/eval.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ka_eval: () => (/* binding */ ka_eval)
/* harmony export */ });
function ka_eval(stmt, __scope, e, __refs) {
    if (stmt.endsWith(";"))
        stmt = stmt.slice(0, -1);
    const reserved = ["var", "null", "let", "const", "function", "class", "in", "of", "for", "true", "false", "await", "$this"];
    let r = "var $this = e;";
    for (let __name in __scope) {
        if (reserved.indexOf(__name) !== -1)
            continue;
        if (__name.indexOf("-") !== -1) {
            console.error(`Invalid scope key '${__name}': Cannot contain - in scope:`, __scope);
            throw `eval() failed: Invalid scope key: '${__name}': Cannot contain minus char '-'`;
        }
        r += `var ${__name} = __scope['${__name}'];`;
    }
    // If the scope was cloned, the original will be in $scope. This is important when
    // Using events [on.click], e.g.
    if (typeof __scope.$scope === "undefined") {
        r += "var $scope = __scope;";
    }
    try {
        // console.log(r + '(' + stmt + ')');
        const func = new Function('e', '__scope', r + '; return ' + stmt);
        return func(e, __scope);
    }
    catch (ex) {
        console.error("cannot eval() stmt: '" + stmt + "': " + ex, " on element ", e, ex, "(context:", __scope, ")");
        throw "eval('" + stmt + "') failed: " + ex;
    }
}


/***/ }),

/***/ "./node_modules/@kasimirjs/embed/dist/core/ka-set-options.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@kasimirjs/embed/dist/core/ka-set-options.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ka_set_options: () => (/* binding */ ka_set_options)
/* harmony export */ });
function ka_set_options(element, options, value = null) {
    element.innerHTML = "";
    for (let option in options) {
        if (isNaN(option)) {
            element.appendChild(new Option(options[option], option));
        }
        else {
            if (typeof options[option].text !== "undefined") {
                element.appendChild(new Option(options[option].text, options[option].value));
            }
            else {
                element.appendChild(new Option(options[option], options[option]));
            }
        }
    }
    if (value !== null)
        element.value = value;
}


/***/ }),

/***/ "./node_modules/@kasimirjs/embed/dist/core/query-select.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@kasimirjs/embed/dist/core/query-select.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ka_query_selector: () => (/* binding */ ka_query_selector)
/* harmony export */ });
/**
 * Query a Element or trigger an Exception
 *
 * @param query
 * @param parent
 * @param exception
 * @return {HTMLElement}
 */
function ka_query_selector(query, parent = null, exception = null) {
    if (typeof exception === "undefined" || exception === null)
        exception = `querySelector '${query}' not found`;
    if (typeof parent === "undefined" || parent === null)
        parent = document;
    let e = parent.querySelectorAll(query);
    if (e.length === 0) {
        console.warn(exception, "on parent: ", parent);
        throw exception;
    }
    return e[0];
}


/***/ }),

/***/ "./node_modules/@kasimirjs/embed/dist/core/sleep.js":
/*!**********************************************************!*\
  !*** ./node_modules/@kasimirjs/embed/dist/core/sleep.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ka_sleep: () => (/* binding */ ka_sleep)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function ka_sleep(sleepms) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve) => {
            window.setTimeout(() => {
                return resolve();
            }, sleepms);
        });
    });
}


/***/ }),

/***/ "./node_modules/@kasimirjs/embed/dist/core/storage.js":
/*!************************************************************!*\
  !*** ./node_modules/@kasimirjs/embed/dist/core/storage.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ka_session_storage: () => (/* binding */ ka_session_storage)
/* harmony export */ });
/**
 * Return a Proxy handling saving / deleting / updating the object in the localStorage
 * @param object
 * @param scopeName
 */
function ka_session_storage(object = {}, scopeName = null) {
    if (scopeName == null) {
        scopeName = "ka_session_storage";
    }
    if (object === null) {
        sessionStorage.removeItem(scopeName);
        return;
    }
    if (sessionStorage.getItem(scopeName) == null) {
        sessionStorage.setItem(scopeName, JSON.stringify(object));
    }
    let savedObject = JSON.parse(sessionStorage.getItem(scopeName));
    for (let key in object) {
        if (typeof savedObject[key] === "undefined") {
            savedObject[key] = object[key];
        }
    }
    let proxy = new Proxy(savedObject, {
        set: function (target, property, value, receiver) {
            target[property] = value;
            sessionStorage.setItem(scopeName, JSON.stringify(target));
            return true;
        }
    });
    return proxy;
}


/***/ }),

/***/ "./node_modules/@kasimirjs/embed/dist/core/str-to-camelcase.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@kasimirjs/embed/dist/core/str-to-camelcase.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ka_str_to_camel_case: () => (/* binding */ ka_str_to_camel_case)
/* harmony export */ });
/**
 * Transform any input to CamelCase
 *
 * Example: some-class => someClass
 *
 * @param str {string}
 * @return {string}
 */
function ka_str_to_camel_case(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, (ltr, idx) => idx === 0 ? ltr.toLowerCase() : ltr.toUpperCase()).replace(/[^a-zA-Z0-9]+/g, '');
}


/***/ }),

/***/ "./node_modules/@kasimirjs/embed/dist/element/KaCustomElement.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@kasimirjs/embed/dist/element/KaCustomElement.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KaCustomElement: () => (/* binding */ KaCustomElement)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./node_modules/@kasimirjs/embed/dist/types.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions */ "./node_modules/@kasimirjs/embed/dist/functions.js");
/* harmony import */ var _tpl_templatify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tpl/templatify */ "./node_modules/@kasimirjs/embed/dist/tpl/templatify.js");
/* harmony import */ var _ce_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ce/html */ "./node_modules/@kasimirjs/embed/dist/ce/html.js");
/* harmony import */ var _tpl_template__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tpl/template */ "./node_modules/@kasimirjs/embed/dist/tpl/template.js");
/* harmony import */ var _core_create_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/create-element */ "./node_modules/@kasimirjs/embed/dist/core/create-element.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};






class ShadowRootConfig {
    constructor() {
        this.mode = null; // Default null: No shadowRoot
        this.stylesheets = [];
    }
}
class KaCustomElement extends HTMLElement {
    constructor() {
        super(...arguments);
        this.__ka_stop_render = true; // Stop rendering if this element is reached
        this.shadowRootConfig = new ShadowRootConfig(); // Activate shadowRoot
        this.html = "Undefined Template";
        this.scope = (0,_types__WEBPACK_IMPORTED_MODULE_0__.createScopeObject)();
        this.tplPrototype = null;
        this.wrapper = null;
    }
    init(scope) {
        this.scope.init(scope);
        return this.scope;
    }
    wrap(fragment) {
        this.wrapper = fragment;
    }
    setParentScope(scope) {
        this.scope.$parent = scope;
    }
    connectedCallback() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.scope.isInitialized())
                this.init({});
            // Check template set by customElement annotation
            // Cannot be done in constructor because of async behavior
            if ((0,_functions__WEBPACK_IMPORTED_MODULE_1__.isset)(this.constructor["html"])) {
                this.html = this.constructor["html"];
            }
            if (this.tplPrototype === null) {
                this.tplPrototype = (0,_tpl_templatify__WEBPACK_IMPORTED_MODULE_2__.ka_templatify)((0,_ce_html__WEBPACK_IMPORTED_MODULE_3__.ka_html)(this.html));
            }
            this.tpl = this.tplPrototype.cloneNode(true);
            this.scope.$tpl = new _tpl_template__WEBPACK_IMPORTED_MODULE_4__.KaTemplate(this.tpl);
            // Adding Shadow Root
            let domRoot = this;
            if (this.shadowRootConfig.mode !== null) {
                domRoot = this.attachShadow({ mode: this.shadowRootConfig.mode });
                this.shadowRootConfig.stylesheets.forEach((stylesheet) => {
                    (0,_core_create_element__WEBPACK_IMPORTED_MODULE_5__.ka_create_element)("link", { rel: "stylesheet", href: stylesheet }, null, domRoot);
                });
            }
            if (this.wrapper !== null) {
                yield this.wrapper.fragmentConnectedCallback();
                domRoot.append(this.wrapper.wrapTemplate(this.tpl));
                this.wrapper.wrapFinish();
            }
            else {
                domRoot.append(this.tpl);
            }
            this.scope.render();
        });
    }
    disconnectedCallback() {
        if (this.scope.$tpl !== undefined)
            this.scope.$tpl.dispose();
    }
}


/***/ }),

/***/ "./node_modules/@kasimirjs/embed/dist/element/KaCustomFragment.js":
/*!************************************************************************!*\
  !*** ./node_modules/@kasimirjs/embed/dist/element/KaCustomFragment.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KaCustomFragment: () => (/* binding */ KaCustomFragment)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./node_modules/@kasimirjs/embed/dist/types.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions */ "./node_modules/@kasimirjs/embed/dist/functions.js");
/* harmony import */ var _tpl_templatify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tpl/templatify */ "./node_modules/@kasimirjs/embed/dist/tpl/templatify.js");
/* harmony import */ var _ce_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ce/html */ "./node_modules/@kasimirjs/embed/dist/ce/html.js");
/* harmony import */ var _tpl_template__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tpl/template */ "./node_modules/@kasimirjs/embed/dist/tpl/template.js");
/* harmony import */ var _core_sleep__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/sleep */ "./node_modules/@kasimirjs/embed/dist/core/sleep.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};






class KaCustomFragment {
    constructor() {
        this.scope = (0,_types__WEBPACK_IMPORTED_MODULE_0__.createScopeObject)();
        this.html = null;
    }
    init(scope) {
        // Check template set by customElement annotation
        if ((0,_functions__WEBPACK_IMPORTED_MODULE_1__.isset)(this.constructor["html"]) && this.html === null)
            this.html = this.constructor["html"];
        if (!(0,_functions__WEBPACK_IMPORTED_MODULE_1__.isset)(this.tplPrototype))
            this.tplPrototype = (0,_tpl_templatify__WEBPACK_IMPORTED_MODULE_2__.ka_templatify)((0,_ce_html__WEBPACK_IMPORTED_MODULE_3__.ka_html)(this.html));
        this.scope.init(scope);
        return this.scope;
    }
    setParentScope(scope) {
        this.scope.$parent = scope;
    }
    setScope(scope) {
        this.scope.importFrom(scope);
    }
    fragmentConnectedCallback(parentElement) {
        return __awaiter(this, void 0, void 0, function* () {
            parentElement.setAttribute("ka.stop", "true");
            if (!this.scope.isInitialized()) {
                this.init({});
            }
            this.tpl = this.tplPrototype.cloneNode(true);
            this.scope.$tpl = new _tpl_template__WEBPACK_IMPORTED_MODULE_4__.KaTemplate(this.tpl);
            parentElement.append(this.tpl);
            yield (0,_core_sleep__WEBPACK_IMPORTED_MODULE_5__.ka_sleep)(1);
            this.scope.render();
        });
    }
    fragmentDisconnectedCallback() {
        this.scope.$tpl.dispose();
    }
}


/***/ }),

/***/ "./node_modules/@kasimirjs/embed/dist/element/KaCustomModal.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@kasimirjs/embed/dist/element/KaCustomModal.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KaCustomModal: () => (/* binding */ KaCustomModal)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./node_modules/@kasimirjs/embed/dist/types.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions */ "./node_modules/@kasimirjs/embed/dist/functions.js");
/* harmony import */ var _tpl_templatify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tpl/templatify */ "./node_modules/@kasimirjs/embed/dist/tpl/templatify.js");
/* harmony import */ var _ce_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ce/html */ "./node_modules/@kasimirjs/embed/dist/ce/html.js");
/* harmony import */ var _core_create_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/create-element */ "./node_modules/@kasimirjs/embed/dist/core/create-element.js");
/* harmony import */ var _tpl_template__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../tpl/template */ "./node_modules/@kasimirjs/embed/dist/tpl/template.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _KaCustomModal_main, _KaCustomModal_configDefaults, _KaCustomModal_promise;






class KaCustomModal {
    adjustWidth(modalConfig) {
        let w = window.innerWidth;
        if (w > modalConfig.maxWidth)
            w = modalConfig.maxWidth;
        __classPrivateFieldGet(this, _KaCustomModal_main, "f").style.width = w + "px";
    }
    constructor(tagName = "ka-modal", shadowRootInit = null, modalConfig = {}) {
        this.scope = (0,_types__WEBPACK_IMPORTED_MODULE_0__.createScopeObject)();
        this.__html = "<div>No Template defined</div>";
        _KaCustomModal_main.set(this, void 0);
        _KaCustomModal_configDefaults.set(this, {
            parentElement: document.body,
            zIndex: 9999,
            styleBase: "position:fixed; top:0; bottom:0; left:0; right:0;",
            styleBackdrop: "background-color: #999;opacity:0.5;",
            maxWidth: 800,
        });
        _KaCustomModal_promise.set(this, {
            promise: null,
            reject: null,
            resolve: null,
        });
        let config = __classPrivateFieldGet(this, _KaCustomModal_configDefaults, "f");
        config = Object.assign(Object.assign({}, config), modalConfig);
        this.element = (0,_core_create_element__WEBPACK_IMPORTED_MODULE_4__.ka_create_element)(tagName, { hidden: "hidden" }, null, config.parentElement);
        this.backdrop = (0,_core_create_element__WEBPACK_IMPORTED_MODULE_4__.ka_create_element)("div", { style: `${config.styleBase};${config.styleBackdrop};z-index:${config.zIndex};` }, null, this.element);
        let master = (0,_core_create_element__WEBPACK_IMPORTED_MODULE_4__.ka_create_element)("div", { style: `position:fixed;left:0;right:0;top:0;bottom:0;display:flex;justify-content:center;z-index:${config.zIndex + 1};` }, null, this.element);
        __classPrivateFieldSet(this, _KaCustomModal_main, (0,_core_create_element__WEBPACK_IMPORTED_MODULE_4__.ka_create_element)("div", { style: `;max-height:100%;max-width:100%;` }, null, master), "f");
        this.adjustWidth(config);
        __classPrivateFieldGet(this, _KaCustomModal_promise, "f").promise = new Promise((resolve, reject) => { __classPrivateFieldGet(this, _KaCustomModal_promise, "f").resolve = resolve; __classPrivateFieldGet(this, _KaCustomModal_promise, "f").reject = reject; });
    }
    init(scope) {
        // Check template set by customElement annotation
        if ((0,_functions__WEBPACK_IMPORTED_MODULE_1__.isset)(this.constructor["html"]))
            this.__html = this.constructor["html"];
        if (!(0,_functions__WEBPACK_IMPORTED_MODULE_1__.isset)(this.tplPrototype))
            this.tplPrototype = (0,_tpl_templatify__WEBPACK_IMPORTED_MODULE_2__.ka_templatify)((0,_ce_html__WEBPACK_IMPORTED_MODULE_3__.ka_html)(this.__html));
        this.scope.init(scope);
        return this.scope;
    }
    setParentScope(scope) {
        this.scope.$parent = scope;
    }
    setScope(scope) {
        this.scope.importFrom(scope);
    }
    resolve(value) {
        this.element.remove();
        __classPrivateFieldGet(this, _KaCustomModal_promise, "f").resolve(value);
    }
    show(...params) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.scope.isInitialized()) {
                this.init({});
            }
            this.tpl = this.tplPrototype.cloneNode(true);
            this.scope.$tpl = new _tpl_template__WEBPACK_IMPORTED_MODULE_5__.KaTemplate(this.tpl);
            __classPrivateFieldGet(this, _KaCustomModal_main, "f").append(this.tpl);
            this.element.removeAttribute("hidden");
            this.scope.render();
            return __classPrivateFieldGet(this, _KaCustomModal_promise, "f").promise;
        });
    }
    fragmentDisconnectedCallback() {
        this.scope.$tpl.dispose();
    }
}
_KaCustomModal_main = new WeakMap(), _KaCustomModal_configDefaults = new WeakMap(), _KaCustomModal_promise = new WeakMap();


/***/ }),

/***/ "./node_modules/@kasimirjs/embed/dist/element/KaCustomWrapper.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@kasimirjs/embed/dist/element/KaCustomWrapper.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KaCustomWrapper: () => (/* binding */ KaCustomWrapper)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./node_modules/@kasimirjs/embed/dist/types.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions */ "./node_modules/@kasimirjs/embed/dist/functions.js");
/* harmony import */ var _tpl_templatify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tpl/templatify */ "./node_modules/@kasimirjs/embed/dist/tpl/templatify.js");
/* harmony import */ var _ce_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ce/html */ "./node_modules/@kasimirjs/embed/dist/ce/html.js");
/* harmony import */ var _tpl_template__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tpl/template */ "./node_modules/@kasimirjs/embed/dist/tpl/template.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





class KaCustomWrapper {
    constructor() {
        this.scope = (0,_types__WEBPACK_IMPORTED_MODULE_0__.createScopeObject)();
        this.html = null;
    }
    init(scope) {
        // Check template set by customElement annotation
        if ((0,_functions__WEBPACK_IMPORTED_MODULE_1__.isset)(this.constructor["html"]) && this.html === null)
            this.html = this.constructor["html"];
        if (!(0,_functions__WEBPACK_IMPORTED_MODULE_1__.isset)(this.tplPrototype))
            this.tplPrototype = (0,_tpl_templatify__WEBPACK_IMPORTED_MODULE_2__.ka_templatify)((0,_ce_html__WEBPACK_IMPORTED_MODULE_3__.ka_html)(this.html));
        this.scope.init(scope);
        return this.scope;
    }
    wrapTemplate(tpl) {
        this.scope.$content = tpl;
        return this.tpl;
    }
    fragmentConnectedCallback() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.scope.isInitialized()) {
                this.init({});
            }
            this.returnedTpl = this.tplPrototype;
            this.tpl = this.tplPrototype.cloneNode(true);
            this.scope.$tpl = new _tpl_template__WEBPACK_IMPORTED_MODULE_4__.KaTemplate(this.tpl);
        });
    }
    wrapFinish() {
        return __awaiter(this, void 0, void 0, function* () {
            this.scope.render();
        });
    }
    fragmentDisconnectedCallback() {
        this.scope.$tpl.dispose();
    }
}


/***/ }),

/***/ "./node_modules/@kasimirjs/embed/dist/element/KaHtmlElement.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@kasimirjs/embed/dist/element/KaHtmlElement.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KaHtmlElement: () => (/* binding */ KaHtmlElement)
/* harmony export */ });
/* harmony import */ var _tpl_template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tpl/template */ "./node_modules/@kasimirjs/embed/dist/tpl/template.js");
/* harmony import */ var _tpl_templatify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tpl/templatify */ "./node_modules/@kasimirjs/embed/dist/tpl/templatify.js");
/* harmony import */ var _ce_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ce/html */ "./node_modules/@kasimirjs/embed/dist/ce/html.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../functions */ "./node_modules/@kasimirjs/embed/dist/functions.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




/**
 * @deprecated
 */
class KaHtmlElement extends HTMLElement {
    constructor(shadowRootInit = null) {
        super();
        this.shadowRootInit = shadowRootInit;
        this.addEventListener("load", (e) => console.log(e));
    }
    connectedCallback() {
        return __awaiter(this, void 0, void 0, function* () {
            let htmlTpl = null;
            if (typeof this.html === "function") {
                let fn = this.html;
                htmlTpl = yield fn(this);
            }
            else {
                htmlTpl = this.html;
            }
            if (typeof htmlTpl === "string")
                htmlTpl = (0,_ce_html__WEBPACK_IMPORTED_MODULE_2__.ka_html)(htmlTpl);
            let attachTo = this;
            if (this.shadowRootInit !== null) {
                attachTo = this.attachShadow(this.shadowRootInit);
            }
            if ((0,_functions__WEBPACK_IMPORTED_MODULE_3__.isset)(htmlTpl)) {
                let tpl;
                try {
                    tpl = (0,_tpl_templatify__WEBPACK_IMPORTED_MODULE_1__.ka_templatify)(htmlTpl);
                }
                catch (e) {
                    console.error("Templatify failed on element", this, "for template", htmlTpl);
                    throw e;
                }
                this.$tpl = new _tpl_template__WEBPACK_IMPORTED_MODULE_0__.KaTemplate(tpl);
                attachTo.appendChild(tpl);
            }
            this.connected();
        });
    }
    disconnectedCallback() {
        return __awaiter(this, void 0, void 0, function* () {
            this.$tpl.dispose();
            this.disconnected();
        });
    }
}


/***/ }),

/***/ "./node_modules/@kasimirjs/embed/dist/element/KaModal.js":
/*!***************************************************************!*\
  !*** ./node_modules/@kasimirjs/embed/dist/element/KaModal.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KaModal: () => (/* binding */ KaModal)
/* harmony export */ });
/* harmony import */ var _tpl_template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tpl/template */ "./node_modules/@kasimirjs/embed/dist/tpl/template.js");
/* harmony import */ var _core_create_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/create-element */ "./node_modules/@kasimirjs/embed/dist/core/create-element.js");
/* harmony import */ var _ce_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ce/html */ "./node_modules/@kasimirjs/embed/dist/ce/html.js");
/* harmony import */ var _tpl_templatify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tpl/templatify */ "./node_modules/@kasimirjs/embed/dist/tpl/templatify.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../types */ "./node_modules/@kasimirjs/embed/dist/types.js");
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _KaModal_main, _KaModal_configDefaults, _KaModal_promise;





class KaModal {
    adjustWidth(modalConfig) {
        let w = window.innerWidth;
        if (w > modalConfig.maxWidth)
            w = modalConfig.maxWidth;
        __classPrivateFieldGet(this, _KaModal_main, "f").style.width = w + "px";
    }
    constructor(tagName = "ka-modal", shadowRootInit = null, modalConfig = {}) {
        this.scope = (0,_types__WEBPACK_IMPORTED_MODULE_4__.createScopeObject)();
        _KaModal_main.set(this, void 0);
        this.$tpl = null;
        _KaModal_configDefaults.set(this, {
            parentElement: document.body,
            zIndex: 9999,
            styleBase: "position:fixed; top:0; bottom:0; left:0; right:0;",
            styleBackdrop: "background-color: #999;opacity:0.5;",
            maxWidth: 800,
        });
        _KaModal_promise.set(this, {
            promise: null,
            reject: null,
            resolve: null,
        });
        let config = __classPrivateFieldGet(this, _KaModal_configDefaults, "f");
        config = Object.assign(Object.assign({}, config), modalConfig);
        this.element = (0,_core_create_element__WEBPACK_IMPORTED_MODULE_1__.ka_create_element)(tagName, { hidden: "hidden" }, null, config.parentElement);
        this.backdrop = (0,_core_create_element__WEBPACK_IMPORTED_MODULE_1__.ka_create_element)("div", { style: `${config.styleBase};${config.styleBackdrop};z-index:${config.zIndex};` }, null, this.element);
        let master = (0,_core_create_element__WEBPACK_IMPORTED_MODULE_1__.ka_create_element)("div", { style: `position:fixed;left:0;right:0;top:0;bottom:0;display:flex;justify-content:center;z-index:${config.zIndex + 1};` }, null, this.element);
        __classPrivateFieldSet(this, _KaModal_main, (0,_core_create_element__WEBPACK_IMPORTED_MODULE_1__.ka_create_element)("div", { style: `;max-height:100%;max-width:100%;` }, null, master), "f");
        this.adjustWidth(config);
        __classPrivateFieldGet(this, _KaModal_promise, "f").promise = new Promise((resolve, reject) => { __classPrivateFieldGet(this, _KaModal_promise, "f").resolve = resolve; __classPrivateFieldGet(this, _KaModal_promise, "f").reject = reject; });
    }
    render(scope = null) {
        if (this.$tpl === null) {
            let html = this.html;
            if (typeof html === "string") {
                html = (0,_ce_html__WEBPACK_IMPORTED_MODULE_2__.ka_html)(html);
            }
            if (!(html instanceof HTMLTemplateElement)) {
                console.error("html is not HtmlTemplateElement", html, "on", this);
                throw "html is not HtmlTemplateElement";
            }
            console.log("html", html);
            let elem;
            try {
                elem = (0,_tpl_templatify__WEBPACK_IMPORTED_MODULE_3__.ka_templatify)(html);
            }
            catch (e) {
                console.log("error templatify for element", this, ":", e);
                throw e;
            }
            __classPrivateFieldGet(this, _KaModal_main, "f").appendChild(elem);
            this.$tpl = new _tpl_template__WEBPACK_IMPORTED_MODULE_0__.KaTemplate(elem);
        }
        this.$tpl.render(scope);
    }
    resolve(value) {
        this.element.remove();
        __classPrivateFieldGet(this, _KaModal_promise, "f").resolve(value);
    }
    show(...params) {
        this.element.removeAttribute("hidden");
        return __classPrivateFieldGet(this, _KaModal_promise, "f").promise;
    }
}
_KaModal_main = new WeakMap(), _KaModal_configDefaults = new WeakMap(), _KaModal_promise = new WeakMap();


/***/ }),

/***/ "./node_modules/@kasimirjs/embed/dist/element/ka-use.js":
/*!**************************************************************!*\
  !*** ./node_modules/@kasimirjs/embed/dist/element/ka-use.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KaUse: () => (/* binding */ KaUse)
/* harmony export */ });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions */ "./node_modules/@kasimirjs/embed/dist/functions.js");
/* harmony import */ var _KaCustomFragment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./KaCustomFragment */ "./node_modules/@kasimirjs/embed/dist/element/KaCustomFragment.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let KaUse = class KaUse extends HTMLElement {
    get component() {
        return this.myComponent;
    }
    set component(val) {
        this.myComponent = val;
        this.innerHTML = "";
        this.append(val);
    }
    /**
     * called from ka.use="" by apply()
     *
     * @param val
     */
    use(val, parentScope) {
        if ((0,_functions__WEBPACK_IMPORTED_MODULE_0__.isset)(val["setParentScope"]))
            val["setParentScope"](parentScope);
        this.myComponent = val;
        this.innerHTML = "";
        // If not specified scope is the parent scope.
        if (!this.hasAttribute("ka.scope"))
            val["setScope"](parentScope);
        if (val instanceof _KaCustomFragment__WEBPACK_IMPORTED_MODULE_1__.KaCustomFragment) {
            val.fragmentConnectedCallback(this);
            return;
        }
        this.append(val);
    }
    /**
     * set dedicated scope using ka.scope
     *
     * @param scope
     */
    setScope(scope) {
        if (this.myComponent instanceof _KaCustomFragment__WEBPACK_IMPORTED_MODULE_1__.KaCustomFragment) {
            this.myComponent.setScope(scope);
        }
    }
    disconnectedCallback() {
    }
    connectedCallback() {
        this.style.display = "contents";
        this.setAttribute("ka.stop", "true");
        if (this.myComponent instanceof _KaCustomFragment__WEBPACK_IMPORTED_MODULE_1__.KaCustomFragment) {
            this.myComponent.fragmentConnectedCallback(this);
        }
    }
};
KaUse = __decorate([
    (0,_functions__WEBPACK_IMPORTED_MODULE_0__.customElement)("ka-use-" + (0,_functions__WEBPACK_IMPORTED_MODULE_0__.random_string)().toLowerCase())
], KaUse);



/***/ }),

/***/ "./node_modules/@kasimirjs/embed/dist/functions.js":
/*!*********************************************************!*\
  !*** ./node_modules/@kasimirjs/embed/dist/functions.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   customElement: () => (/* binding */ customElement),
/* harmony export */   isUndefined: () => (/* binding */ isUndefined),
/* harmony export */   isset: () => (/* binding */ isset),
/* harmony export */   ka_await_element: () => (/* binding */ ka_await_element),
/* harmony export */   random_string: () => (/* binding */ random_string),
/* harmony export */   template: () => (/* binding */ template)
/* harmony export */ });
/* harmony import */ var _core_sleep__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/sleep */ "./node_modules/@kasimirjs/embed/dist/core/sleep.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

/**
 * Check if parameter is undefined or null
 *
 * @param input
 */
function isset(input) {
    return (typeof input !== "undefined" && input !== null);
}
function isUndefined(input) {
    return (typeof input === "undefined");
}
/**
 * Defines a customElement
 *
 * Usage as class decorator @customElement("some-tag")
 *
 * @param tagName
 */
function customElement(tagName = null, template = null) {
    return function (classOrDescriptor) {
        if (template !== null) {
            classOrDescriptor["html"] = template;
        }
        if (window["_kasi_defined_custom_elements"] === undefined) {
            window["_kasi_defined_custom_elements"] = [];
        }
        if (tagName === null) {
            if (window["_kasi_anon_element_id"] === undefined) {
                window["_kasi_anon_element_id"] = 0;
            }
            tagName = "kasimirjs-anon-element-" + window["_kasi_anon_element_id"]++;
        }
        //console.debug("registering custom element", classOrDescriptor, tagName);
        if (!window["_kasi_defined_custom_elements"].includes(tagName)) {
            customElements.define(tagName, classOrDescriptor);
            window["_kasi_defined_custom_elements"].push(tagName);
        }
        return classOrDescriptor;
    };
}
function ka_await_element(selector, parent = document, maxWait = 2000) {
    return __awaiter(this, void 0, void 0, function* () {
        let elem = parent.querySelector(selector);
        let rounds = 1;
        while (elem === null && maxWait > 0) {
            let delay = 20 * rounds++;
            yield (0,_core_sleep__WEBPACK_IMPORTED_MODULE_0__.ka_sleep)(delay);
            elem = parent.querySelector(selector);
            maxWait -= delay;
        }
        return elem;
    });
}
function template(template) {
    return function (classOrDescriptor) {
        classOrDescriptor["html"] = template;
        return classOrDescriptor;
    };
}
function random_string(len = 12) {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for (let i = 0; i < len; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}


/***/ }),

/***/ "./node_modules/@kasimirjs/embed/dist/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/@kasimirjs/embed/dist/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Debouncer: () => (/* reexport safe */ _core_debouncer__WEBPACK_IMPORTED_MODULE_18__.Debouncer),
/* harmony export */   KaCustomElement: () => (/* reexport safe */ _element_KaCustomElement__WEBPACK_IMPORTED_MODULE_8__.KaCustomElement),
/* harmony export */   KaCustomFragment: () => (/* reexport safe */ _element_KaCustomFragment__WEBPACK_IMPORTED_MODULE_9__.KaCustomFragment),
/* harmony export */   KaCustomModal: () => (/* reexport safe */ _element_KaCustomModal__WEBPACK_IMPORTED_MODULE_11__.KaCustomModal),
/* harmony export */   KaCustomWrapper: () => (/* reexport safe */ _element_KaCustomWrapper__WEBPACK_IMPORTED_MODULE_10__.KaCustomWrapper),
/* harmony export */   KaHtmlElement: () => (/* reexport safe */ _element_KaHtmlElement__WEBPACK_IMPORTED_MODULE_7__.KaHtmlElement),
/* harmony export */   KaModal: () => (/* reexport safe */ _element_KaModal__WEBPACK_IMPORTED_MODULE_13__.KaModal),
/* harmony export */   KaTemplate: () => (/* reexport safe */ _tpl_template__WEBPACK_IMPORTED_MODULE_12__.KaTemplate),
/* harmony export */   createScopeObject: () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_1__.createScopeObject),
/* harmony export */   customElement: () => (/* reexport safe */ _functions__WEBPACK_IMPORTED_MODULE_0__.customElement),
/* harmony export */   isUndefined: () => (/* reexport safe */ _functions__WEBPACK_IMPORTED_MODULE_0__.isUndefined),
/* harmony export */   isset: () => (/* reexport safe */ _functions__WEBPACK_IMPORTED_MODULE_0__.isset),
/* harmony export */   ka_await_element: () => (/* reexport safe */ _functions__WEBPACK_IMPORTED_MODULE_0__.ka_await_element),
/* harmony export */   ka_create_element: () => (/* reexport safe */ _core_create_element__WEBPACK_IMPORTED_MODULE_4__.ka_create_element),
/* harmony export */   ka_debounce: () => (/* reexport safe */ _core_debounce__WEBPACK_IMPORTED_MODULE_3__.ka_debounce),
/* harmony export */   ka_dom_ready: () => (/* reexport safe */ _core_dom_ready__WEBPACK_IMPORTED_MODULE_6__.ka_dom_ready),
/* harmony export */   ka_eval: () => (/* reexport safe */ _core_eval__WEBPACK_IMPORTED_MODULE_15__.ka_eval),
/* harmony export */   ka_html: () => (/* reexport safe */ _ce_html__WEBPACK_IMPORTED_MODULE_16__.ka_html),
/* harmony export */   ka_query_selector: () => (/* reexport safe */ _core_query_select__WEBPACK_IMPORTED_MODULE_14__.ka_query_selector),
/* harmony export */   ka_session_storage: () => (/* reexport safe */ _core_storage__WEBPACK_IMPORTED_MODULE_19__.ka_session_storage),
/* harmony export */   ka_set_options: () => (/* reexport safe */ _core_ka_set_options__WEBPACK_IMPORTED_MODULE_5__.ka_set_options),
/* harmony export */   ka_sleep: () => (/* reexport safe */ _core_sleep__WEBPACK_IMPORTED_MODULE_2__.ka_sleep),
/* harmony export */   ka_templatify: () => (/* reexport safe */ _tpl_templatify__WEBPACK_IMPORTED_MODULE_17__.ka_templatify),
/* harmony export */   random_string: () => (/* reexport safe */ _functions__WEBPACK_IMPORTED_MODULE_0__.random_string),
/* harmony export */   template: () => (/* reexport safe */ _functions__WEBPACK_IMPORTED_MODULE_0__.template)
/* harmony export */ });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ "./node_modules/@kasimirjs/embed/dist/functions.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "./node_modules/@kasimirjs/embed/dist/types.js");
/* harmony import */ var _core_sleep__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/sleep */ "./node_modules/@kasimirjs/embed/dist/core/sleep.js");
/* harmony import */ var _core_debounce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/debounce */ "./node_modules/@kasimirjs/embed/dist/core/debounce.js");
/* harmony import */ var _core_create_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/create-element */ "./node_modules/@kasimirjs/embed/dist/core/create-element.js");
/* harmony import */ var _core_ka_set_options__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/ka-set-options */ "./node_modules/@kasimirjs/embed/dist/core/ka-set-options.js");
/* harmony import */ var _core_dom_ready__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/dom-ready */ "./node_modules/@kasimirjs/embed/dist/core/dom-ready.js");
/* harmony import */ var _element_KaHtmlElement__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./element/KaHtmlElement */ "./node_modules/@kasimirjs/embed/dist/element/KaHtmlElement.js");
/* harmony import */ var _element_KaCustomElement__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./element/KaCustomElement */ "./node_modules/@kasimirjs/embed/dist/element/KaCustomElement.js");
/* harmony import */ var _element_KaCustomFragment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./element/KaCustomFragment */ "./node_modules/@kasimirjs/embed/dist/element/KaCustomFragment.js");
/* harmony import */ var _element_KaCustomWrapper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./element/KaCustomWrapper */ "./node_modules/@kasimirjs/embed/dist/element/KaCustomWrapper.js");
/* harmony import */ var _element_KaCustomModal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./element/KaCustomModal */ "./node_modules/@kasimirjs/embed/dist/element/KaCustomModal.js");
/* harmony import */ var _tpl_template__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./tpl/template */ "./node_modules/@kasimirjs/embed/dist/tpl/template.js");
/* harmony import */ var _element_KaModal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./element/KaModal */ "./node_modules/@kasimirjs/embed/dist/element/KaModal.js");
/* harmony import */ var _core_query_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./core/query-select */ "./node_modules/@kasimirjs/embed/dist/core/query-select.js");
/* harmony import */ var _core_eval__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./core/eval */ "./node_modules/@kasimirjs/embed/dist/core/eval.js");
/* harmony import */ var _ce_html__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ce/html */ "./node_modules/@kasimirjs/embed/dist/ce/html.js");
/* harmony import */ var _tpl_templatify__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./tpl/templatify */ "./node_modules/@kasimirjs/embed/dist/tpl/templatify.js");
/* harmony import */ var _core_debouncer__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./core/debouncer */ "./node_modules/@kasimirjs/embed/dist/core/debouncer.js");
/* harmony import */ var _core_storage__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./core/storage */ "./node_modules/@kasimirjs/embed/dist/core/storage.js");






















/***/ }),

/***/ "./node_modules/@kasimirjs/embed/dist/tpl/template.js":
/*!************************************************************!*\
  !*** ./node_modules/@kasimirjs/embed/dist/tpl/template.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KaTemplate: () => (/* binding */ KaTemplate)
/* harmony export */ });
/* harmony import */ var _core_eval_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/eval.js */ "./node_modules/@kasimirjs/embed/dist/core/eval.js");
/* harmony import */ var _core_elwalk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/elwalk.js */ "./node_modules/@kasimirjs/embed/dist/core/elwalk.js");
/* harmony import */ var _core_apply_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/apply.js */ "./node_modules/@kasimirjs/embed/dist/core/apply.js");
/* harmony import */ var _ce_custom_element_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ce/custom-element.js */ "./node_modules/@kasimirjs/embed/dist/ce/custom-element.js");




class KaTemplate {
    constructor(template) {
        this.template = template;
        if (typeof this.template.__kachilds === "undefined")
            this.template.__kachilds = [];
        if (typeof this.template.__kasibling === "undefined")
            this.template.__kasibling = this.template.nextElementSibling;
        this.__renderCount = 0;
        this.$scope = {};
    }
    _error(msg) {
        console.error(`[ka-template] ${msg} on element`, this.template);
        throw `[ka-template] ${msg} on element` + this.template;
    }
    _appendTemplate() {
        let elements = this.template.content;
        let elList = [];
        for (let curE of elements.children) {
            curE = curE.cloneNode(true);
            curE._ka_maintained_by = this.template.getAttribute("_kaidx");
            elList.push(curE);
            this.template.parentNode.insertBefore(curE, this.template.__kasibling);
        }
        this.template.__kachilds.push(elList);
    }
    _removeLastChild() {
        if (this.template.__kachilds.length === 0)
            return;
        let childs = this.template.__kachilds[this.template.__kachilds.length - 1];
        for (let curE of childs) {
            this.template.parentElement.removeChild(curE);
        }
        this.template.__kachilds.length = this.template.__kachilds.length - 1;
    }
    _renderFor($scope, stmt) {
        //console.log("kachilds", this.template.__kachilds);
        let matches = stmt.match(/^(let)?\s*(?<target>.+)\s+(?<type>of|in|repeat)\s+(?<select>.+)$/);
        if (matches === null) {
            this._error(`Can't parse ka.for='${stmt}'`);
        }
        let selectVal = (0,_core_eval_js__WEBPACK_IMPORTED_MODULE_0__.ka_eval)(matches.groups.select, $scope, this.template);
        if (matches.groups.type === "repeat") {
            if (typeof selectVal !== "number")
                this._error(`Error ka.for='${stmt}': Selected val must be number in repeat loop`);
            selectVal = new Array(selectVal).fill(null);
        }
        let eIndex = 0;
        for (let index in selectVal) {
            let curScope = Object.assign({ $scope: $scope }, $scope);
            curScope[matches.groups.target] = index;
            if (matches.groups.type === "of")
                curScope[matches.groups.target] = selectVal[index];
            if (this.template.__kachilds.length < eIndex + 1) {
                //console.log("append", eIndex, this.template.__kachilds.length);
                this._appendTemplate();
            }
            this._maintain(curScope, this.template.__kachilds[eIndex], eIndex);
            eIndex++;
        }
        for (let remIdx = eIndex; remIdx < this.template.__kachilds.length;) {
            this._removeLastChild();
        }
    }
    _maintain($scope, childs, forIndex = 0) {
        for (let child of childs) {
            child._ka_for_index = forIndex;
            (0,_core_elwalk_js__WEBPACK_IMPORTED_MODULE_1__.ka_elwalk)(child, (el) => {
                //console.log("walk", el);
                if (el instanceof HTMLTemplateElement) {
                    //console.log("maintain", el);
                    let r = new this.constructor(el);
                    r.render($scope);
                    return false;
                }
                if (typeof el._ka_maintained_by !== "undefined" && el._ka_maintained_by !== this.template.getAttribute("_kaidx")) {
                    return false;
                }
                (0,_core_apply_js__WEBPACK_IMPORTED_MODULE_2__.ka_apply)(el, $scope);
                if ((el instanceof HTMLElement && el.hasAttribute("ka.stop")) || el["__ka_stop_render"]) {
                    return false; // Skip Element rendering
                }
            }, true, true);
        }
    }
    _renderIf($scope, stmt) {
        let selectVal = (0,_core_eval_js__WEBPACK_IMPORTED_MODULE_0__.ka_eval)(stmt, $scope, this.template);
        if (selectVal === true) {
            if (this.template.__kachilds.length === 0)
                this._appendTemplate();
            this._maintain($scope, this.template.__kachilds[0]);
        }
        else {
            this._removeLastChild();
        }
    }
    /**
     * Remove all rendered element
     */
    dispose() {
        for (; this.template.__kachilds.length > 0;)
            this._removeLastChild();
    }
    setScope($scope) {
        this.$scope = $scope;
    }
    /**
     * Render / Update the Template
     *
     * Once the scope in parameter 1 was set, it will render
     * without any parameters. Scope is available via property $scope
     *
     * @param $scope
     */
    render($scope = null) {
        if ($scope === null)
            $scope = this.$scope;
        this.$scope = $scope;
        this.__renderCount++;
        if (this.template.hasAttribute("ka.for")) {
            this._renderFor($scope, this.template.getAttribute("ka.for"));
        }
        else if (this.template.hasAttribute("ka.if")) {
            this._renderIf($scope, this.template.getAttribute("ka.if"));
        }
        else {
            if (typeof this.template._ka_active === "undefined") {
                this._appendTemplate();
                this.template._ka_active = true;
            }
            this._maintain($scope, this.template.__kachilds);
        }
    }
    /**
     * Return true if this template was renderd the first time
     *
     * @returns {boolean}
     */
    isFirstRender() {
        return this.__renderCount === 1;
    }
}
;


/***/ }),

/***/ "./node_modules/@kasimirjs/embed/dist/tpl/templatify.js":
/*!**************************************************************!*\
  !*** ./node_modules/@kasimirjs/embed/dist/tpl/templatify.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ka_templatify: () => (/* binding */ ka_templatify)
/* harmony export */ });
/* harmony import */ var _core_query_select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/query-select */ "./node_modules/@kasimirjs/embed/dist/core/query-select.js");
/* harmony import */ var _core_elwalk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/elwalk.js */ "./node_modules/@kasimirjs/embed/dist/core/elwalk.js");


function quoteattr(s, preserveCR) {
    preserveCR = preserveCR ? '&#13;' : '\n';
    return ('' + s) /* Forces the conversion to string. */
        .replace(/&/g, '&amp;') /* This MUST be the 1st replacement. */
        .replace(/'/g, '&apos;') /* The 4 other predefined entities, required. */
        .replace(/"/g, '&quot;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        /*
        You may add other replacements here for HTML only
        (but it's not necessary).
        Or for XML, only if the named entities are defined in its DTD.
        */
        .replace(/\r\n/g, preserveCR) /* Must be before the next replacement. */
        .replace(/[\r\n]/g, preserveCR);
    ;
}
window._ka_el_idx = 0;
/**
 * Generate a renderable Template from <template> Element
 *
 * @param {HTMLElement|string} elem
 * @return {HTMLTemplateElement}
 */
function ka_templatify(elem, returnMode = true) {
    if (typeof elem === "string")
        elem = (0,_core_query_select__WEBPACK_IMPORTED_MODULE_0__.ka_query_selector)(elem);
    if (!(elem instanceof Node)) {
        console.error("[ka-templatify] Parameter 1 is not a html element: ", elem);
        throw `[ka-templify] Parameter 1 is not a html element: ${elem}`;
    }
    const elIdxName = "_ka_el_idx";
    if (window[elIdxName] === null)
        window[elIdxName] = 5;
    window[elIdxName]++;
    if (returnMode) {
        let returnTpl = document.createElement("template");
        returnTpl.setAttribute("_kaidx", (window[elIdxName]).toString());
        /* @var {HTMLTemplateElement} returnTpl */
        returnTpl.innerHTML = elem.innerHTML
            .replace(/\[\[(.*?)\]\]/g, (matches, m1) => `<span ka.textContent="${quoteattr(m1)}"></span>`);
        ka_templatify(returnTpl.content, false);
        return returnTpl;
    }
    if (elem instanceof HTMLTemplateElement)
        elem = elem.content;
    let wrapElem = (el, attName, attVal) => {
        let tpl = document.createElement("template");
        tpl.setAttribute("_kaidx", (window[elIdxName]).toString());
        let clonedEl = el.cloneNode(true);
        clonedEl.removeAttribute(attName);
        tpl.content.append(clonedEl);
        tpl.setAttribute(attName, attVal);
        el.replaceWith(tpl);
        return tpl;
    };
    (0,_core_elwalk_js__WEBPACK_IMPORTED_MODULE_1__.ka_elwalk)(elem, (el) => {
        //console.log(el);
        if (!(el instanceof HTMLElement))
            return;
        let tpl = null;
        for (let attrName of el.getAttributeNames()) {
            if (attrName === "ka.for") {
                tpl = wrapElem(el, "ka.for", el.getAttribute("ka.for"));
                ka_templatify(tpl, false);
                break;
            }
            if (attrName === "ka.if") {
                tpl = wrapElem(el, "ka.if", el.getAttribute("ka.if"));
                ka_templatify(tpl, false);
                break;
            }
        }
    }, true, false);
}


/***/ }),

/***/ "./node_modules/@kasimirjs/embed/dist/types.js":
/*!*****************************************************!*\
  !*** ./node_modules/@kasimirjs/embed/dist/types.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createScopeObject: () => (/* binding */ createScopeObject)
/* harmony export */ });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ "./node_modules/@kasimirjs/embed/dist/functions.js");
/* harmony import */ var _core_debouncer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/debouncer */ "./node_modules/@kasimirjs/embed/dist/core/debouncer.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


class KaDefaultScope {
    constructor() {
        this.__isInitialized = false;
    }
    isInitialized() {
        return this.__isInitialized;
    }
    render() {
        return __awaiter(this, void 0, void 0, function* () {
            this.$tpl.render(this);
        });
    }
    raw() {
        return this.$__scope_orig;
    }
    importFrom(scope) {
        for (let key of Object.keys(scope)) {
            if (key.startsWith("$") || key.startsWith("__"))
                continue;
            this["$__scope_orig"][key] = scope[key];
        }
    }
    dump() {
        return Object.assign({}, this);
    }
    init(scopeDef) {
        if (this.isInitialized())
            throw "Scope is already initalized";
        this.__isInitialized = true;
        for (let key of Object.keys(scopeDef)) {
            this[key] = scopeDef[key];
        }
    }
}
function createScopeObject(init = null) {
    let scopeDef = new KaDefaultScope();
    scopeDef["$__scope_orig"] = scopeDef;
    let proxy = new Proxy(scopeDef, {
        get(target, prop, receiver) {
            if (prop.startsWith("$"))
                return target[prop];
            return target[prop];
        },
        set(target, p, value, receiver) {
            if (target[p] === value)
                return true; // Nothing changed
            target[p] = value;
            let debouncer = new _core_debouncer__WEBPACK_IMPORTED_MODULE_1__.Debouncer(50, 50);
            if (p.startsWith("$") || p.startsWith("__"))
                return true;
            if ((0,_functions__WEBPACK_IMPORTED_MODULE_0__.isset)(scopeDef.$tpl))
                scopeDef.$tpl.render();
            (() => __awaiter(this, void 0, void 0, function* () {
                yield debouncer.debounce();
            }))();
            return true;
        }
    });
    if (init !== null)
        scopeDef.init(init);
    return proxy;
}


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/_index.scss":
/*!******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/_index.scss ***!
  \******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0;
}

html {
  font-size: 100%;
  line-height: 1.5;
  -webkit-text-size-adjust: 100%;
}

body {
  font-family: Arial, sans-serif;
  background: white;
  color: black;
}

h1, h2, h3, h4, h5, h6 {
  font-size: inherit;
  font-weight: normal;
}

p, ul, ol, dl, dt, dd {
  margin: 0;
}

ul, ol {
  list-style: none;
}

a {
  color: inherit;
  text-decoration: none;
}

button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
}

button,
input {
  overflow: visible;
}

button,
select {
  text-transform: none;
}

button,
[type=button],
[type=reset],
[type=submit] {
  -webkit-appearance: button;
}

fieldset {
  padding: 0;
  border: 0;
}

img {
  vertical-align: middle;
  max-width: 100%;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

.d-none {
  display: none !important;
}

.d-block {
  display: block !important;
}

.p-0 {
  padding: 0rem !important;
}

.m-0 {
  margin: 0rem !important;
}

.pt-0,
.py-0 {
  padding-top: 0rem !important;
}

.pr-0,
.px-0 {
  padding-right: 0rem !important;
}

.pb-0,
.py-0 {
  padding-bottom: 0rem !important;
}

.pl-0,
.px-0 {
  padding-left: 0rem !important;
}

.p-1 {
  padding: 0.25rem !important;
}

.m-1 {
  margin: 0.25rem !important;
}

.pt-1,
.py-1 {
  padding-top: 0.25rem !important;
}

.pr-1,
.px-1 {
  padding-right: 0.25rem !important;
}

.pb-1,
.py-1 {
  padding-bottom: 0.25rem !important;
}

.pl-1,
.px-1 {
  padding-left: 0.25rem !important;
}

.p-2 {
  padding: 0.5rem !important;
}

.m-2 {
  margin: 0.5rem !important;
}

.pt-2,
.py-2 {
  padding-top: 0.5rem !important;
}

.pr-2,
.px-2 {
  padding-right: 0.5rem !important;
}

.pb-2,
.py-2 {
  padding-bottom: 0.5rem !important;
}

.pl-2,
.px-2 {
  padding-left: 0.5rem !important;
}

.p-3 {
  padding: 0.75rem !important;
}

.m-3 {
  margin: 0.75rem !important;
}

.pt-3,
.py-3 {
  padding-top: 0.75rem !important;
}

.pr-3,
.px-3 {
  padding-right: 0.75rem !important;
}

.pb-3,
.py-3 {
  padding-bottom: 0.75rem !important;
}

.pl-3,
.px-3 {
  padding-left: 0.75rem !important;
}

.p-4 {
  padding: 1rem !important;
}

.m-4 {
  margin: 1rem !important;
}

.pt-4,
.py-4 {
  padding-top: 1rem !important;
}

.pr-4,
.px-4 {
  padding-right: 1rem !important;
}

.pb-4,
.py-4 {
  padding-bottom: 1rem !important;
}

.pl-4,
.px-4 {
  padding-left: 1rem !important;
}

.p-5 {
  padding: 1.25rem !important;
}

.m-5 {
  margin: 1.25rem !important;
}

.pt-5,
.py-5 {
  padding-top: 1.25rem !important;
}

.pr-5,
.px-5 {
  padding-right: 1.25rem !important;
}

.pb-5,
.py-5 {
  padding-bottom: 1.25rem !important;
}

.pl-5,
.px-5 {
  padding-left: 1.25rem !important;
}

.col-1 {
  flex: 0 0 auto;
  width: 8.3333333333%;
}

.col-2 {
  flex: 0 0 auto;
  width: 16.6666666667%;
}

.col-3 {
  flex: 0 0 auto;
  width: 25%;
}

.col-4 {
  flex: 0 0 auto;
  width: 33.3333333333%;
}

.col-5 {
  flex: 0 0 auto;
  width: 41.6666666667%;
}

.col-6 {
  flex: 0 0 auto;
  width: 50%;
}

.col-7 {
  flex: 0 0 auto;
  width: 58.3333333333%;
}

.col-8 {
  flex: 0 0 auto;
  width: 66.6666666667%;
}

.col-9 {
  flex: 0 0 auto;
  width: 75%;
}

.col-10 {
  flex: 0 0 auto;
  width: 83.3333333333%;
}

.col-11 {
  flex: 0 0 auto;
  width: 91.6666666667%;
}

.col-12 {
  flex: 0 0 auto;
  width: 100%;
}

.col {
  flex: 1 0 0%;
  max-width: 100%;
  padding-right: 15px/2;
  padding-left: 15px/2;
}

.row {
  display: flex;
  flex-wrap: wrap;
  margin-right: calc(-1 * 15px / 2);
  margin-left: calc(-1 * 15px / 2);
}
.row > [class*=col-] {
  padding-right: 15px/2;
  padding-left: 15px/2;
}

.col-auto {
  flex: 0 0 auto;
  width: auto;
  max-width: 100%;
}

.container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
@media (min-width: 576px) {
  .container {
    max-width: 546px;
  }
}
@media (min-width: 768px) {
  .container {
    max-width: 738px;
  }
}
@media (min-width: 992px) {
  .container {
    max-width: 962px;
  }
}
@media (min-width: 1200px) {
  .container {
    max-width: 1170px;
  }
}
@media (min-width: 1400px) {
  .container {
    max-width: 1370px;
  }
}

.container, .container-fluid {
  width: 100%;
  padding-right: var(--bs-gutter-x, 0.75rem);
  padding-left: var(--bs-gutter-x, 0.75rem);
  margin-right: auto;
  margin-left: auto;
}

/**
 * Komponente: header
 */
.tjs-header1 {
  background: transparent linear-gradient(118deg, #E8F6FF 0%, #ECF2DC 100%) 0% 0% no-repeat padding-box;
  padding: 15px 0;
  border-bottom: 1px solid #e5e5e5;
  padding-top: var(--t-hero-top-space, 0px);
  min-height: calc(100vh - 110px);
  display: flex;
  align-items: center;
}
.tjs-header1 img {
  max-width: 100%;
  height: auto;
}
.tjs-header1__hero--row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.tjs-header1__hero--col {
  flex-basis: 50%;
}
.tjs-header1__hero--col-text {
  text-align: left;
}
.tjs-header1__hero--col-image {
  display: block;
}
.tjs-header1.decreased-height {
  padding-bottom: 50px;
  min-height: unset;
}
.tjs-header1 :not(:has(img)) .tjs-header1__hero {
  margin-bottom: 2rem;
  margin-top: -2rem;
}
.tjs-header1 :not(:has(img)) .tjs-header1__hero--row {
  display: block;
}
.tjs-header1 :not(:has(img)) .tjs-header1__hero--col-text {
  text-align: center;
}
.tjs-header1.mobile .tjs-header1__hero--col {
  flex-basis: 100%;
}
.tjs-header1.mobile .tjs-header1__hero--col-text {
  text-align: center;
}
.tjs-header1.mobile .tjs-header1__hero--col-image {
  display: none;
}

joda-content {
  display: none;
  --joda-init: true;
}

joda-content.loaded {
  display: block;
}`, "",{"version":3,"sources":["webpack://./src/microbs/_reset.scss","webpack://./src/_index.scss","webpack://./src/microbs/_micro-bootstrap.scss","webpack://./src/sections/header1/_header1.scss","webpack://./workspaces/jodastyle/index.scss"],"names":[],"mappings":"AAAA;;;EAGI,sBAAA;EACA,SAAA;EACA,UAAA;EACA,SAAA;ACCJ;;ADEA;EACI,eAAA;EACA,gBAAA;EACA,8BAAA;ACCJ;;ADGA;EACI,8BAAA;EACA,iBAAA;EACA,YAAA;ACAJ;;ADGA;EACI,kBAAA;EACA,mBAAA;ACAJ;;ADGA;EACI,SAAA;ACAJ;;ADGA;EACI,gBAAA;ACAJ;;ADGA;EACI,cAAA;EACA,qBAAA;ACAJ;;ADGA;;;;;EAKI,oBAAA;EACA,eAAA;EACA,iBAAA;EACA,SAAA;ACAJ;;ADGA;;EAEI,iBAAA;ACAJ;;ADGA;;EAEI,oBAAA;ACAJ;;ADGA;;;;EAII,0BAAA;ACAJ;;ADGA;EACI,UAAA;EACA,SAAA;ACAJ;;ADGA;EACI,sBAAA;EACA,eAAA;ACAJ;;ADGA;EACI,yBAAA;EACA,iBAAA;ACAJ;;AC9EA;EACI,wBAAA;ADiFJ;;AC9EA;EACI,yBAAA;ADiFJ;;AC3EI;EACI,wBAAA;AD8ER;;AC3EI;EACI,uBAAA;AD8ER;;AC3EI;;EAEI,4BAAA;AD8ER;;AC3EI;;EAEI,8BAAA;AD8ER;;AC3EI;;EAEI,+BAAA;AD8ER;;AC3EI;;EAEI,6BAAA;AD8ER;;ACvGI;EACI,2BAAA;AD0GR;;ACvGI;EACI,0BAAA;AD0GR;;ACvGI;;EAEI,+BAAA;AD0GR;;ACvGI;;EAEI,iCAAA;AD0GR;;ACvGI;;EAEI,kCAAA;AD0GR;;ACvGI;;EAEI,gCAAA;AD0GR;;ACnII;EACI,0BAAA;ADsIR;;ACnII;EACI,yBAAA;ADsIR;;ACnII;;EAEI,8BAAA;ADsIR;;ACnII;;EAEI,gCAAA;ADsIR;;ACnII;;EAEI,iCAAA;ADsIR;;ACnII;;EAEI,+BAAA;ADsIR;;AC/JI;EACI,2BAAA;ADkKR;;AC/JI;EACI,0BAAA;ADkKR;;AC/JI;;EAEI,+BAAA;ADkKR;;AC/JI;;EAEI,iCAAA;ADkKR;;AC/JI;;EAEI,kCAAA;ADkKR;;AC/JI;;EAEI,gCAAA;ADkKR;;AC3LI;EACI,wBAAA;AD8LR;;AC3LI;EACI,uBAAA;AD8LR;;AC3LI;;EAEI,4BAAA;AD8LR;;AC3LI;;EAEI,8BAAA;AD8LR;;AC3LI;;EAEI,+BAAA;AD8LR;;AC3LI;;EAEI,6BAAA;AD8LR;;ACvNI;EACI,2BAAA;AD0NR;;ACvNI;EACI,0BAAA;AD0NR;;ACvNI;;EAEI,+BAAA;AD0NR;;ACvNI;;EAEI,iCAAA;AD0NR;;ACvNI;;EAEI,kCAAA;AD0NR;;ACvNI;;EAEI,gCAAA;AD0NR;;ACjNI;EACI,cAAA;EACA,oBAAA;ADoNR;;ACtNI;EACI,cAAA;EACA,qBAAA;ADyNR;;AC3NI;EACI,cAAA;EACA,UAAA;AD8NR;;AChOI;EACI,cAAA;EACA,qBAAA;ADmOR;;ACrOI;EACI,cAAA;EACA,qBAAA;ADwOR;;AC1OI;EACI,cAAA;EACA,UAAA;AD6OR;;AC/OI;EACI,cAAA;EACA,qBAAA;ADkPR;;ACpPI;EACI,cAAA;EACA,qBAAA;ADuPR;;ACzPI;EACI,cAAA;EACA,UAAA;AD4PR;;AC9PI;EACI,cAAA;EACA,qBAAA;ADiQR;;ACnQI;EACI,cAAA;EACA,qBAAA;ADsQR;;ACxQI;EACI,cAAA;EACA,WAAA;AD2QR;;ACrQA;EACI,YAAA;EACA,eAAA;EACA,qBAAA;EACA,oBAAA;ADwQJ;;ACpQA;EACI,aAAA;EACA,eAAA;EACA,iCAAA;EACA,gCAAA;ADuQJ;ACpQI;EACI,qBAAA;EACA,oBAAA;ADsQR;;ACjQA;EACI,cAAA;EACA,WAAA;EACA,eAAA;ADoQJ;;AC3OA;EACE,WAAA;EACA,mBAbiB;EAcjB,kBAdiB;EAejB,kBAAA;EACA,iBAAA;AD8OF;ACzPI;EAMJ;IALM,gBAAA;ED4PJ;AACF;AC9PI;EAMJ;IALM,gBAAA;EDiQJ;AACF;ACnQI;EAMJ;IALM,gBAAA;EDsQJ;AACF;ACxQI;EAMJ;IALM,iBAAA;ED2QJ;AACF;AC7QI;EAMJ;IALM,iBAAA;EDgRJ;AACF;;AClQA;EACI,WAAA;EACA,0CAAA;EACA,yCAAA;EACA,kBAAA;EACA,iBAAA;ADqQJ;;AE7XA;;EAAA;AAIA;EACI,qGAAA;EACA,eAAA;EACA,gCAAA;EACA,yCAAA;EACA,+BAAA;EACA,aAAA;EACA,mBAAA;AF+XJ;AE7XI;EACI,eAAA;EACA,YAAA;AF+XR;AE1XQ;EACI,aAAA;EACA,eAAA;EACA,mBAAA;AF4XZ;AEzXQ;EACI,eAAA;AF2XZ;AEzXY;EACI,gBAAA;AF2XhB;AExXY;EACI,cAAA;AF0XhB;AErXI;EACI,oBAAA;EACA,iBAAA;AFuXR;AElXY;EACI,mBAAA;EACA,iBAAA;AFoXhB;AEjXY;EACI,cAAA;AFmXhB;AEhXY;EACI,kBAAA;AFkXhB;AExWgB;EACI,gBAAA;AF0WpB;AExWoB;EACI,kBAAA;AF0WxB;AEvWoB;EACI,aAAA;AFyWxB;;AGnbA;EACE,aAAA;EACA,iBAAA;AHsbF;;AGnbA;EACE,cAAA;AHsbF","sourcesContent":["*,\n*::before,\n*::after {\n    box-sizing: border-box; // Ensures consistent box model\n    margin: 0; // Removes default margins\n    padding: 0; // Removes default paddings\n    border: 0; // Removes default borders\n}\n\nhtml {\n    font-size: 100%; // Sets base font-size for rem units\n    line-height: 1.5; // Sets a default line-height\n    -webkit-text-size-adjust: 100%; // Prevents font scaling in landscape while allowing the user to zoom\n\n}\n\nbody {\n    font-family: Arial, sans-serif; // Sets a default font family\n    background: white; // Sets a default background color\n    color: black; // Sets a default text color\n}\n\nh1, h2, h3, h4, h5, h6 {\n    font-size: inherit; // Prevents browsers from applying their own font-size\n    font-weight: normal; // Removes bold styling from headings\n}\n\np, ul, ol, dl, dt, dd {\n    margin: 0; // Removes default margins\n}\n\nul, ol {\n    list-style: none; // Removes default list styling\n}\n\na {\n    color: inherit; // Inherits color from parent\n    text-decoration: none; // Removes underline\n}\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n    font-family: inherit; // Ensures inputs use the same font\n    font-size: 100%; // Prevents IE from enlarging text in forms\n    line-height: 1.15; // Fixes an issue with certain form elements in iOS\n    margin: 0; // Removes default margin\n}\n\nbutton,\ninput {\n    overflow: visible; // Fixes an overflow issue in IE\n}\n\nbutton,\nselect {\n    text-transform: none; // Fixes an issue with button and select text in Firefox\n}\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n    -webkit-appearance: button; // Corrects inability to style clickable types in iOS\n}\n\nfieldset {\n    padding: 0; // Removes default padding\n    border: 0; // Removes default border\n}\n\nimg {\n    vertical-align: middle; // Aligns images correctly inline\n    max-width: 100%; // Ensures images are responsive\n}\n\ntable {\n    border-collapse: collapse; // Collapses table borders\n    border-spacing: 0; // Removes default spacing\n}\n","*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  border: 0;\n}\n\nhtml {\n  font-size: 100%;\n  line-height: 1.5;\n  -webkit-text-size-adjust: 100%;\n}\n\nbody {\n  font-family: Arial, sans-serif;\n  background: white;\n  color: black;\n}\n\nh1, h2, h3, h4, h5, h6 {\n  font-size: inherit;\n  font-weight: normal;\n}\n\np, ul, ol, dl, dt, dd {\n  margin: 0;\n}\n\nul, ol {\n  list-style: none;\n}\n\na {\n  color: inherit;\n  text-decoration: none;\n}\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit;\n  font-size: 100%;\n  line-height: 1.15;\n  margin: 0;\n}\n\nbutton,\ninput {\n  overflow: visible;\n}\n\nbutton,\nselect {\n  text-transform: none;\n}\n\nbutton,\n[type=button],\n[type=reset],\n[type=submit] {\n  -webkit-appearance: button;\n}\n\nfieldset {\n  padding: 0;\n  border: 0;\n}\n\nimg {\n  vertical-align: middle;\n  max-width: 100%;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n.d-none {\n  display: none !important;\n}\n\n.d-block {\n  display: block !important;\n}\n\n.p-0 {\n  padding: 0rem !important;\n}\n\n.m-0 {\n  margin: 0rem !important;\n}\n\n.pt-0,\n.py-0 {\n  padding-top: 0rem !important;\n}\n\n.pr-0,\n.px-0 {\n  padding-right: 0rem !important;\n}\n\n.pb-0,\n.py-0 {\n  padding-bottom: 0rem !important;\n}\n\n.pl-0,\n.px-0 {\n  padding-left: 0rem !important;\n}\n\n.p-1 {\n  padding: 0.25rem !important;\n}\n\n.m-1 {\n  margin: 0.25rem !important;\n}\n\n.pt-1,\n.py-1 {\n  padding-top: 0.25rem !important;\n}\n\n.pr-1,\n.px-1 {\n  padding-right: 0.25rem !important;\n}\n\n.pb-1,\n.py-1 {\n  padding-bottom: 0.25rem !important;\n}\n\n.pl-1,\n.px-1 {\n  padding-left: 0.25rem !important;\n}\n\n.p-2 {\n  padding: 0.5rem !important;\n}\n\n.m-2 {\n  margin: 0.5rem !important;\n}\n\n.pt-2,\n.py-2 {\n  padding-top: 0.5rem !important;\n}\n\n.pr-2,\n.px-2 {\n  padding-right: 0.5rem !important;\n}\n\n.pb-2,\n.py-2 {\n  padding-bottom: 0.5rem !important;\n}\n\n.pl-2,\n.px-2 {\n  padding-left: 0.5rem !important;\n}\n\n.p-3 {\n  padding: 0.75rem !important;\n}\n\n.m-3 {\n  margin: 0.75rem !important;\n}\n\n.pt-3,\n.py-3 {\n  padding-top: 0.75rem !important;\n}\n\n.pr-3,\n.px-3 {\n  padding-right: 0.75rem !important;\n}\n\n.pb-3,\n.py-3 {\n  padding-bottom: 0.75rem !important;\n}\n\n.pl-3,\n.px-3 {\n  padding-left: 0.75rem !important;\n}\n\n.p-4 {\n  padding: 1rem !important;\n}\n\n.m-4 {\n  margin: 1rem !important;\n}\n\n.pt-4,\n.py-4 {\n  padding-top: 1rem !important;\n}\n\n.pr-4,\n.px-4 {\n  padding-right: 1rem !important;\n}\n\n.pb-4,\n.py-4 {\n  padding-bottom: 1rem !important;\n}\n\n.pl-4,\n.px-4 {\n  padding-left: 1rem !important;\n}\n\n.p-5 {\n  padding: 1.25rem !important;\n}\n\n.m-5 {\n  margin: 1.25rem !important;\n}\n\n.pt-5,\n.py-5 {\n  padding-top: 1.25rem !important;\n}\n\n.pr-5,\n.px-5 {\n  padding-right: 1.25rem !important;\n}\n\n.pb-5,\n.py-5 {\n  padding-bottom: 1.25rem !important;\n}\n\n.pl-5,\n.px-5 {\n  padding-left: 1.25rem !important;\n}\n\n.col-1 {\n  flex: 0 0 auto;\n  width: 8.3333333333%;\n}\n\n.col-2 {\n  flex: 0 0 auto;\n  width: 16.6666666667%;\n}\n\n.col-3 {\n  flex: 0 0 auto;\n  width: 25%;\n}\n\n.col-4 {\n  flex: 0 0 auto;\n  width: 33.3333333333%;\n}\n\n.col-5 {\n  flex: 0 0 auto;\n  width: 41.6666666667%;\n}\n\n.col-6 {\n  flex: 0 0 auto;\n  width: 50%;\n}\n\n.col-7 {\n  flex: 0 0 auto;\n  width: 58.3333333333%;\n}\n\n.col-8 {\n  flex: 0 0 auto;\n  width: 66.6666666667%;\n}\n\n.col-9 {\n  flex: 0 0 auto;\n  width: 75%;\n}\n\n.col-10 {\n  flex: 0 0 auto;\n  width: 83.3333333333%;\n}\n\n.col-11 {\n  flex: 0 0 auto;\n  width: 91.6666666667%;\n}\n\n.col-12 {\n  flex: 0 0 auto;\n  width: 100%;\n}\n\n.col {\n  flex: 1 0 0%;\n  max-width: 100%;\n  padding-right: 15px/2;\n  padding-left: 15px/2;\n}\n\n.row {\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: calc(-1 * 15px / 2);\n  margin-left: calc(-1 * 15px / 2);\n}\n.row > [class*=col-] {\n  padding-right: 15px/2;\n  padding-left: 15px/2;\n}\n\n.col-auto {\n  flex: 0 0 auto;\n  width: auto;\n  max-width: 100%;\n}\n\n.container {\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n}\n@media (min-width: 576px) {\n  .container {\n    max-width: 546px;\n  }\n}\n@media (min-width: 768px) {\n  .container {\n    max-width: 738px;\n  }\n}\n@media (min-width: 992px) {\n  .container {\n    max-width: 962px;\n  }\n}\n@media (min-width: 1200px) {\n  .container {\n    max-width: 1170px;\n  }\n}\n@media (min-width: 1400px) {\n  .container {\n    max-width: 1370px;\n  }\n}\n\n.container, .container-fluid {\n  width: 100%;\n  padding-right: var(--bs-gutter-x, 0.75rem);\n  padding-left: var(--bs-gutter-x, 0.75rem);\n  margin-right: auto;\n  margin-left: auto;\n}\n\n/**\n * Komponente: header\n */\n.tjs-header1 {\n  background: transparent linear-gradient(118deg, #E8F6FF 0%, #ECF2DC 100%) 0% 0% no-repeat padding-box;\n  padding: 15px 0;\n  border-bottom: 1px solid #e5e5e5;\n  padding-top: var(--t-hero-top-space, 0px);\n  min-height: calc(100vh - 110px);\n  display: flex;\n  align-items: center;\n}\n.tjs-header1 img {\n  max-width: 100%;\n  height: auto;\n}\n.tjs-header1__hero--row {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n}\n.tjs-header1__hero--col {\n  flex-basis: 50%;\n}\n.tjs-header1__hero--col-text {\n  text-align: left;\n}\n.tjs-header1__hero--col-image {\n  display: block;\n}\n.tjs-header1.decreased-height {\n  padding-bottom: 50px;\n  min-height: unset;\n}\n.tjs-header1 :not(:has(img)) .tjs-header1__hero {\n  margin-bottom: 2rem;\n  margin-top: -2rem;\n}\n.tjs-header1 :not(:has(img)) .tjs-header1__hero--row {\n  display: block;\n}\n.tjs-header1 :not(:has(img)) .tjs-header1__hero--col-text {\n  text-align: center;\n}\n.tjs-header1.mobile .tjs-header1__hero--col {\n  flex-basis: 100%;\n}\n.tjs-header1.mobile .tjs-header1__hero--col-text {\n  text-align: center;\n}\n.tjs-header1.mobile .tjs-header1__hero--col-image {\n  display: none;\n}\n\njoda-content {\n  display: none;\n  --joda-init: true;\n}\n\njoda-content.loaded {\n  display: block;\n}","@use \"sass:math\";\n\n.d-none {\n    display: none !important;\n}\n\n.d-block {\n    display: block !important;\n}\n\n// Padding and Margin Utilities\n// Assuming a scale where 1 = 0.25rem, 2 = 0.5rem, etc.\n@for $i from 0 through 5 {\n    .p-#{$i} {\n        padding: $i * 0.25rem !important;\n    }\n\n    .m-#{$i} {\n        margin: $i * 0.25rem !important;\n    }\n\n    .pt-#{$i},\n    .py-#{$i} {\n        padding-top: $i * 0.25rem !important;\n    }\n\n    .pr-#{$i},\n    .px-#{$i} {\n        padding-right: $i * 0.25rem !important;\n    }\n\n    .pb-#{$i},\n    .py-#{$i} {\n        padding-bottom: $i * 0.25rem !important;\n    }\n\n    .pl-#{$i},\n    .px-#{$i} {\n        padding-left: $i * 0.25rem !important;\n    }\n\n    // Repeat for margin (mt-, mr-, mb-, ml-, mx-, my-)\n}\n\n// Grid System\n// Assuming a 12 column grid\n@for $i from 1 through 12 {\n    .col-#{$i} {\n        flex: 0 0 auto;\n        width: percentage(math.div($i, 12));\n    }\n}\n\n\n$gutter-width: 15px !default;\n.col {\n    flex: 1 0 0%; // Occupy the available space equally\n    max-width: 100%;\n    padding-right: #{$gutter-width} / 2;\n    padding-left: #{$gutter-width} / 2;\n}\n\n// Row class\n.row {\n    display: flex;\n    flex-wrap: wrap;\n    margin-right: calc(-1 * #{$gutter-width} / 2);\n    margin-left: calc(-1 * #{$gutter-width} / 2);\n\n    // Nested columns\n    > [class*=\"col-\"] {\n        padding-right: #{$gutter-width} / 2;\n        padding-left: #{$gutter-width} / 2;\n    }\n}\n\n// Col-auto class\n.col-auto {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: 100%;\n}\n\n\n\n$breakpoints: (\n  sm: 576px,\n  md: 768px,\n  lg: 992px,\n  xl: 1200px,\n  xxl: 1400px\n);\n\n// Margin for containers\n$container-margin: 15px !default;\n\n// Mixin for responsive container widths\n@mixin container-max-widths() {\n  @each $breakpoint, $value in $breakpoints {\n    @media (min-width: $value) {\n      max-width: $value - ($container-margin * 2);\n    }\n  }\n}\n\n.container {\n  width: 100%;\n  padding-right: $container-margin;\n  padding-left: $container-margin;\n  margin-right: auto;\n  margin-left: auto;\n\n  @include container-max-widths();\n}\n\n.container, .container-fluid{\n    width: 100%;\n    padding-right: var(--bs-gutter-x, .75rem);\n    padding-left: var(--bs-gutter-x, .75rem);\n    margin-right: auto;\n    margin-left: auto;\n}\n","/**\n * Komponente: header\n */\n\n.tjs-header1 {\n    background: transparent linear-gradient(118deg, #E8F6FF 0%, #ECF2DC 100%) 0% 0% no-repeat padding-box;\n    padding: 15px 0;\n    border-bottom: 1px solid #e5e5e5;\n    padding-top: var(--t-hero-top-space, 0px);\n    min-height: calc(100vh - 110px);\n    display: flex;\n    align-items: center;\n\n    img {\n        max-width: 100%;\n        height: auto;\n    }\n\n    &__hero {\n\n        &--row {\n            display: flex;\n            flex-wrap: wrap;\n            align-items: center;\n        }\n\n        &--col {\n            flex-basis: 50%;\n\n            &-text {\n                text-align: left;\n            }\n\n            &-image {\n                display: block;\n            }\n        }\n    }\n\n    &.decreased-height {\n        padding-bottom: 50px;\n        min-height: unset;\n    }\n\n    :not(:has(img)) {\n        .tjs-header1 {\n            &__hero {\n                margin-bottom: 2rem;\n                margin-top: -2rem;\n            }\n\n            &__hero--row {\n                display: block;\n            }\n\n            &__hero--col-text {\n                text-align: center;\n            }\n        }\n    }\n\n    &.mobile {\n        .tjs-header1 {\n\n\n            &__hero {\n                &--col {\n                    flex-basis: 100%;\n\n                    &-text {\n                        text-align: center;\n                    }\n\n                    &-image {\n                        display: none;\n                    }\n                }\n            }\n        }\n    }\n}\n","joda-content {\n  display: none;\n  --joda-init: true;\n}\n\njoda-content.loaded {\n  display: block;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/_all.ts":
/*!*********************!*\
  !*** ./src/_all.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sections_header1_header1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sections/header1/header1 */ "./src/sections/header1/header1.ts");



/***/ }),

/***/ "./src/sections/header1/header1.ts":
/*!*****************************************!*\
  !*** ./src/sections/header1/header1.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @leuffen/jodastyle */ "./workspaces/jodastyle/index.ts");

_leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__.Joda.registerTemplate(
  "header1",
  // language=HTML
  `
        <section class="tjs-header1 :: mobile :lg: ">
            <div class="tjs-wrapper container-fluid">

                <div class="tjs-header1__hero container">
                    <div class="tjs-header1__hero--row">
                        <div class="tjs-header1__hero--col tjs-header1__hero--col-text">
                            <slot></slot>
                        </div>
                        <div class="tjs-header1__hero--col tjs-header1__hero--col-image">
                            <slot data-select="img" data-replace></slot>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    `
);


/***/ }),

/***/ "./theme/index.ts":
/*!************************!*\
  !*** ./theme/index.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/_index.scss */ "./src/_index.scss");
/* harmony import */ var _src_all__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../src/_all */ "./src/_all.ts");




/***/ }),

/***/ "./workspaces/jodastyle/index.ts":
/*!***************************************!*\
  !*** ./workspaces/jodastyle/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/index */ "./workspaces/jodastyle/src/index.ts");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _src_index__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _src_index__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);



/***/ }),

/***/ "./workspaces/jodastyle/src/component/joda-content-element.ts":
/*!********************************************************************!*\
  !*** ./workspaces/jodastyle/src/component/joda-content-element.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JodaContentElement: () => (/* binding */ JodaContentElement)
/* harmony export */ });
/* harmony import */ var _kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @kasimirjs/embed */ "./node_modules/@kasimirjs/embed/dist/index.js");
/* harmony import */ var _processor_jodastyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../processor/jodastyle */ "./workspaces/jodastyle/src/processor/jodastyle.ts");
/* harmony import */ var _processor_jodaresponsive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../processor/jodaresponsive */ "./workspaces/jodastyle/src/processor/jodaresponsive.ts");
/* harmony import */ var _helper_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helper/logger */ "./workspaces/jodastyle/src/helper/logger.ts");
/* harmony import */ var _processor_jodavisualize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../processor/jodavisualize */ "./workspaces/jodastyle/src/processor/jodavisualize.ts");
/* harmony import */ var _helper_JodaSiteConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helper/JodaSiteConfig */ "./workspaces/jodastyle/src/helper/JodaSiteConfig.ts");
/* harmony import */ var _helper_functions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helper/functions */ "./workspaces/jodastyle/src/helper/functions.ts");
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
var _origContentTemplate, _outputDiv;







function getCSSRule(ruleName) {
  ruleName = ruleName.toLowerCase();
  var result = null;
  var find = Array.prototype.find;
  find.call(document.styleSheets, (styleSheet) => {
    result = find.call(styleSheet.cssRules, (cssRule) => {
      return cssRule instanceof CSSStyleRule && cssRule.selectorText.toLowerCase() == ruleName;
    });
    return result != null;
  });
  return result;
}
console.time("jodaTime");
let JodaContentElement = class extends HTMLElement {
  constructor() {
    super(...arguments);
    __privateAdd(this, _origContentTemplate, void 0);
    __privateAdd(this, _outputDiv, void 0);
  }
  awaitStyles() {
    return __async(this, null, function* () {
      let index = 0;
      while (true) {
        index++;
        let initValue = getComputedStyle(this).getPropertyValue("--joda-init");
        if (initValue.indexOf("true") !== -1) {
          break;
        }
        if (index > 100) {
          index = 0;
          console.warn("Still waiting for --joda-init: true", this, "current value:", initValue, "on url", window.location.href);
        }
        yield (0,_kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__.ka_sleep)(50 + index);
      }
    });
  }
  setLoaded() {
    return __async(this, null, function* () {
      yield (0,_kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__.ka_sleep)(10);
      this.classList.add("loaded");
      yield (0,_kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__.ka_sleep)(100);
      document.body.classList.add("loaded");
      document.querySelector("html").classList.remove("loader");
    });
  }
  connectedCallback() {
    return __async(this, null, function* () {
      let logger = new _helper_logger__WEBPACK_IMPORTED_MODULE_3__.Logger("joda-content");
      yield (0,_kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__.ka_sleep)(1);
      yield this.awaitStyles();
      __privateSet(this, _origContentTemplate, (0,_kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__.ka_create_element)("template"));
      __privateSet(this, _outputDiv, (0,_kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__.ka_create_element)("div"));
      if (_helper_JodaSiteConfig__WEBPACK_IMPORTED_MODULE_5__.jodaSiteConfig.disable_templates) {
        this.setLoaded();
        if (_helper_JodaSiteConfig__WEBPACK_IMPORTED_MODULE_5__.jodaSiteConfig.debug_visualize && _helper_JodaSiteConfig__WEBPACK_IMPORTED_MODULE_5__.jodaSiteConfig.debug_visualize_attribute) {
          new _processor_jodavisualize__WEBPACK_IMPORTED_MODULE_4__.Jodavisualize().process(this);
        }
        return;
      }
      let jodaStyle = new _processor_jodastyle__WEBPACK_IMPORTED_MODULE_1__.Jodastyle(logger);
      yield jodaStyle.process(this);
      let jodaresponsive = new _processor_jodaresponsive__WEBPACK_IMPORTED_MODULE_2__.Jodaresponsive(logger);
      let currentBreakpoint = (0,_processor_jodaresponsive__WEBPACK_IMPORTED_MODULE_2__.getCurrentBreakpoint)();
      jodaresponsive.process(this);
      if (_helper_JodaSiteConfig__WEBPACK_IMPORTED_MODULE_5__.jodaSiteConfig.debug_visualize && _helper_JodaSiteConfig__WEBPACK_IMPORTED_MODULE_5__.jodaSiteConfig.debug_visualize_attribute) {
        new _processor_jodavisualize__WEBPACK_IMPORTED_MODULE_4__.Jodavisualize().process(this);
      }
      this.setLoaded();
      window.addEventListener("resize", () => {
        if (currentBreakpoint === (0,_processor_jodaresponsive__WEBPACK_IMPORTED_MODULE_2__.getCurrentBreakpoint)()) {
          return;
        }
        currentBreakpoint = (0,_processor_jodaresponsive__WEBPACK_IMPORTED_MODULE_2__.getCurrentBreakpoint)();
        logger.log("Breakpoint changed to " + currentBreakpoint);
        jodaresponsive.process(this);
      });
      for (let callback of _helper_functions__WEBPACK_IMPORTED_MODULE_6__.allTemplatesConnectedCallbacks) {
        yield callback();
      }
    });
  }
  setContent(content) {
    this.innerHTML = content;
    this.connectedCallback();
  }
};
_origContentTemplate = new WeakMap();
_outputDiv = new WeakMap();
JodaContentElement = __decorateClass([
  (0,_kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__.customElement)("joda-content")
], JodaContentElement);


/***/ }),

/***/ "./workspaces/jodastyle/src/component/joda-fetch.ts":
/*!**********************************************************!*\
  !*** ./workspaces/jodastyle/src/component/joda-fetch.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @kasimirjs/embed */ "./node_modules/@kasimirjs/embed/dist/index.js");
/* harmony import */ var _processor_jodastyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../processor/jodastyle */ "./workspaces/jodastyle/src/processor/jodastyle.ts");
/* harmony import */ var _helper_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helper/logger */ "./workspaces/jodastyle/src/helper/logger.ts");
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};



let JodaFetch = class extends HTMLElement {
  connectedCallback() {
    return __async(this, null, function* () {
      let select = this.getAttribute("data-select");
      let elem = document.querySelector(select);
      if (elem === null) {
        console.error("joda-fetch: Element not found", select, "in element", this);
        return;
      }
      let jodaStyle = new _processor_jodastyle__WEBPACK_IMPORTED_MODULE_1__.Jodastyle(new _helper_logger__WEBPACK_IMPORTED_MODULE_2__.Logger("joda-fetch"));
      this.innerHTML = elem.innerHTML;
      yield jodaStyle.process(this);
    });
  }
};
JodaFetch = __decorateClass([
  (0,_kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__.customElement)("joda-fetch")
], JodaFetch);


/***/ }),

/***/ "./workspaces/jodastyle/src/component/joda-split.ts":
/*!**********************************************************!*\
  !*** ./workspaces/jodastyle/src/component/joda-split.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @kasimirjs/embed */ "./node_modules/@kasimirjs/embed/dist/index.js");
/* harmony import */ var _processor_jodasplit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../processor/jodasplit */ "./workspaces/jodastyle/src/processor/jodasplit.ts");
/* harmony import */ var _helper_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helper/logger */ "./workspaces/jodastyle/src/helper/logger.ts");
/* harmony import */ var _processor_jodashorts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../processor/jodashorts */ "./workspaces/jodastyle/src/processor/jodashorts.ts");
/* harmony import */ var _helper_JodaSiteConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helper/JodaSiteConfig */ "./workspaces/jodastyle/src/helper/JodaSiteConfig.ts");
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
var _ready;





let JodaSplit = class extends HTMLElement {
  constructor() {
    super(...arguments);
    __privateAdd(this, _ready, false);
  }
  get ready() {
    return __privateGet(this, _ready);
  }
  connectedCallback() {
    return __async(this, null, function* () {
      let logger = new _helper_logger__WEBPACK_IMPORTED_MODULE_2__.Logger("joda-split");
      yield (0,_kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__.ka_sleep)(1);
      if (_helper_JodaSiteConfig__WEBPACK_IMPORTED_MODULE_4__.jodaSiteConfig.debug_visualize) {
        this.classList.add("joda-debug-visualize");
      }
      if (_helper_JodaSiteConfig__WEBPACK_IMPORTED_MODULE_4__.jodaSiteConfig.disable_split) {
        __privateSet(this, _ready, true);
        return;
      }
      let jodaShorts = new _processor_jodashorts__WEBPACK_IMPORTED_MODULE_3__.Jodashorts(logger);
      this.innerHTML = yield jodaShorts.process(this.innerHTML);
      let jodaSplit = new _processor_jodasplit__WEBPACK_IMPORTED_MODULE_1__.Jodasplit(logger);
      let fragment = document.createDocumentFragment();
      fragment.append(yield jodaSplit.process(this));
      this.innerHTML = "";
      this.append(fragment);
      __privateSet(this, _ready, true);
    });
  }
};
_ready = new WeakMap();
JodaSplit = __decorateClass([
  (0,_kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__.customElement)("joda-split")
], JodaSplit);


/***/ }),

/***/ "./workspaces/jodastyle/src/helper/JodaDescriptionManager.ts":
/*!*******************************************************************!*\
  !*** ./workspaces/jodastyle/src/helper/JodaDescriptionManager.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JodaDescriptionManager: () => (/* binding */ JodaDescriptionManager),
/* harmony export */   __JodaDescriptionManager: () => (/* binding */ __JodaDescriptionManager)
/* harmony export */ });
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
class __JodaDescriptionManager {
  addClass(category, className, description, example, modifiers, config = {}) {
    let defaultConfig = {
      bodyClasses: [],
      parseMarkdown: true
    };
    config = __spreadValues(__spreadValues({}, defaultConfig), config);
    if (window["jodastyle"] === void 0) {
      window["jodastyle"] = {};
    }
    if (window["jodastyle"]["descriptions"] === void 0) {
      window["jodastyle"]["descriptions"] = [];
    }
    window["jodastyle"]["descriptions"].push({ category, className, description, example, modifiers, config });
  }
  addMarkdownPage(uri, name) {
    if (window["jodastyle"] === void 0) {
      window["jodastyle"] = {};
    }
    if (window["jodastyle"]["descriptions"] === void 0) {
      window["jodastyle"]["descriptions"] = [];
    }
    window["jodastyle"]["descriptions"].push({
      category: "page",
      className: name,
      description: "A page with markdown content",
      exampleUri: uri,
      modifiers: [],
      config: {
        parseMarkdown: true
      }
    });
  }
  get data() {
    var _a;
    if (window["jodastyle"] === void 0) {
      console.warn("[jodastyle description manager] No jodastyle descriptions found (Make sure you imported a theme) => window.jodastyle is undefined");
      return [];
    }
    return (_a = window["jodastyle"]["descriptions"]) != null ? _a : [];
  }
  get classes() {
    return this.data.map((e) => e.className);
  }
  getDescription(className) {
    return this.data.find((e) => e.className === className);
  }
}
const JodaDescriptionManager = new __JodaDescriptionManager();


/***/ }),

/***/ "./workspaces/jodastyle/src/helper/JodaElementException.ts":
/*!*****************************************************************!*\
  !*** ./workspaces/jodastyle/src/helper/JodaElementException.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JodaElementException: () => (/* binding */ JodaElementException)
/* harmony export */ });
class JodaElementException {
  constructor(message, element = null, triggerCommand = null) {
    this.message = message;
    this.element = element;
    this.triggerCommand = triggerCommand;
  }
}


/***/ }),

/***/ "./workspaces/jodastyle/src/helper/JodaErrorElement.ts":
/*!*************************************************************!*\
  !*** ./workspaces/jodastyle/src/helper/JodaErrorElement.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JodaErrorElement: () => (/* binding */ JodaErrorElement)
/* harmony export */ });
/* harmony import */ var _kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @kasimirjs/embed */ "./node_modules/@kasimirjs/embed/dist/index.js");
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getProtoOf = Object.getPrototypeOf;
var __reflectGet = Reflect.get;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};
var __superGet = (cls, obj, key) => __reflectGet(__getProtoOf(cls), key, obj);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

let tpl = `
<style>
.joda-error {
    display: block;
    background-color: rgba(241,179,179,0.17);
    margin: 1em;
    padding: 1em;
    color: red;
    font-weight: bold;
    border: 3px solid red;
}
</style>
<div class="joda-error">
    [[ message ]]
</div>
`;
let JodaErrorElement = class extends _kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__.KaCustomElement {
  constructor(message) {
    super();
    this.message = message;
    let scope = this.init({
      message
    });
  }
  connectedCallback() {
    return __async(this, null, function* () {
      yield __superGet(JodaErrorElement.prototype, this, "connectedCallback").call(this);
      this.scope.message = this.message;
    });
  }
};
JodaErrorElement = __decorateClass([
  (0,_kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__.customElement)("joda-error"),
  (0,_kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__.template)(tpl)
], JodaErrorElement);


/***/ }),

/***/ "./workspaces/jodastyle/src/helper/JodaRenderer.ts":
/*!*********************************************************!*\
  !*** ./workspaces/jodastyle/src/helper/JodaRenderer.ts ***!
  \*********************************************************/
/***/ (() => {



/***/ }),

/***/ "./workspaces/jodastyle/src/helper/JodaSiteConfig.ts":
/*!***********************************************************!*\
  !*** ./workspaces/jodastyle/src/helper/JodaSiteConfig.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   jodaSiteConfig: () => (/* binding */ jodaSiteConfig)
/* harmony export */ });
/* harmony import */ var _kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @kasimirjs/embed */ "./node_modules/@kasimirjs/embed/dist/index.js");

class JodaSiteConfig {
  constructor() {
    this.disable_split = false;
    this.disable_templates = false;
    this.disable_responsive = false;
    this.debug_visualize = false;
    this.debug_visualize_attribute = false;
  }
  // Add Attribution to visualized elements
}
const jodaSiteConfig = (0,_kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__.ka_session_storage)(new JodaSiteConfig(), "jodaSiteConfig");


/***/ }),

/***/ "./workspaces/jodastyle/src/helper/QTemplate.ts":
/*!******************************************************!*\
  !*** ./workspaces/jodastyle/src/helper/QTemplate.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QTemplate: () => (/* binding */ QTemplate),
/* harmony export */   template_parse: () => (/* binding */ template_parse)
/* harmony export */ });
/* harmony import */ var _kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @kasimirjs/embed */ "./node_modules/@kasimirjs/embed/dist/index.js");


function template_parse(input, scope, element) {
  return input.replace(/\[\[(.*?)]]/gmi, (match, p1) => {
    let val = (0,_kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__.ka_eval)(p1, scope, element, {});
    return val;
  });
}
class QTemplate {
  constructor(content) {
    if (typeof content === "string") {
      this.content = (0,_kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__.ka_create_element)("template");
      this.content.innerHTML = content;
    } else {
      this.content = content;
    }
    if (this.content instanceof HTMLTemplateElement) {
      if (this.content.content.children.length > 1) {
        throw new Error("Template must have exactly one root element. Found: " + this.content.innerHTML);
      }
      this.content = this.content.content.firstElementChild.cloneNode(true);
    }
    this.selected = null;
  }
  parse(scope) {
    let tpl = (0,_kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__.ka_create_element)("template", {}, [], null);
    tpl.content.append(this.content);
    tpl.innerHTML = template_parse(tpl.innerHTML, scope, tpl);
    this.content = tpl.content.firstElementChild;
    return this;
  }
  /**
   * Returns the element with the given data-ref attribute
   * @param data_ref
   */
  by(data_ref) {
    let selector = `[data-ref="${data_ref}"]`;
    if (this.content.matches(selector)) {
      return this.content;
    }
    return this.content.querySelector(selector);
  }
  select(data_ref) {
    this.selected = this.by(data_ref);
    if (this.selected === null) {
      console.error("Element with data-ref '" + data_ref + "' not found.", this.content);
      throw "Element with data-ref '" + data_ref + "' not found.";
    }
    return this;
  }
  /**
   * Pick elements by selector and append them to the selected element
   *
   * @param source
   * @param selector
   */
  pick(source, selector, modifier = null) {
    Array.from(source.querySelectorAll(selector)).forEach((e) => {
      if (modifier !== null) {
        e = modifier(e);
      }
      this.selected.append(e);
    });
    return this;
  }
  /**
   * Select and return own wrapper
   *
   * @param data_ref
   */
  with(data_ref) {
    let instance = new QTemplate(this.content);
    instance.select(data_ref);
    return instance;
  }
  append(element) {
    if (element instanceof QTemplate) {
      this.selected.append(element.content);
      return this;
    }
    if (element instanceof NodeList) {
      Array.from(element).forEach((e) => this.selected.append(e));
      return this;
    }
    if (Array.isArray(element) || element instanceof NodeList) {
      element.forEach((e) => this.selected.append(e));
      return this;
    }
    this.selected.append(element);
    return this;
  }
  clone() {
    return new QTemplate(this.content.cloneNode(true));
  }
}


/***/ }),

/***/ "./workspaces/jodastyle/src/helper/functions.ts":
/*!******************************************************!*\
  !*** ./workspaces/jodastyle/src/helper/functions.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   allTemplatesConnectedCallbacks: () => (/* binding */ allTemplatesConnectedCallbacks),
/* harmony export */   await_property: () => (/* binding */ await_property),
/* harmony export */   getCleanVariableValue: () => (/* binding */ getCleanVariableValue),
/* harmony export */   getTemplateFilledWithContent: () => (/* binding */ getTemplateFilledWithContent),
/* harmony export */   jodaRenderer: () => (/* binding */ jodaRenderer),
/* harmony export */   parseConfigString: () => (/* binding */ parseConfigString),
/* harmony export */   registerJodaRenderer: () => (/* binding */ registerJodaRenderer),
/* harmony export */   runCallbacksForTemplate: () => (/* binding */ runCallbacksForTemplate),
/* harmony export */   splitChildrenBySelector: () => (/* binding */ splitChildrenBySelector),
/* harmony export */   wrapElement: () => (/* binding */ wrapElement)
/* harmony export */ });
/* harmony import */ var _kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @kasimirjs/embed */ "./node_modules/@kasimirjs/embed/dist/index.js");
/* harmony import */ var _JodaElementException__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./JodaElementException */ "./workspaces/jodastyle/src/helper/JodaElementException.ts");
/* harmony import */ var _QTemplate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./QTemplate */ "./workspaces/jodastyle/src/helper/QTemplate.ts");
/* harmony import */ var _joda__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../joda */ "./workspaces/jodastyle/src/joda.ts");
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};




let allTemplatesConnectedCallbacks = [];
function await_property(object, property, wait = 10) {
  return __async(this, null, function* () {
    if (typeof property === "string") {
      property = property.split(".");
    }
    let value = void 0;
    let index = 0;
    while (value === void 0) {
      index++;
      let curObject = object;
      for (let i = 0; i < property.length; i++) {
        if (curObject === void 0) {
          break;
        }
        curObject = curObject[property[i]];
      }
      value = curObject;
      if (value === void 0)
        yield (0,_kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__.ka_sleep)(wait);
      if (index > 1e3) {
        index = 0;
        console.warn("Still waiting for property: ", property, "in object", object);
      }
    }
    return value;
  });
}
function wrapElement(element, wrapper) {
  var _a;
  (_a = element.parentNode) == null ? void 0 : _a.insertBefore(wrapper, element);
  wrapper.appendChild(element);
}
function registerJodaRenderer(name, renderer, config) {
  if (window["jodastyle"] === void 0) {
    window["jodastyle"] = {};
  }
  if (window["jodastyle"]["renderer"] === void 0) {
    window["jodastyle"]["renderer"] = {};
  }
  window["jodastyle"]["renderer"][name] = { renderer, config };
}
function jodaRenderer(name, config) {
  return function(classOrDescriptor) {
    registerJodaRenderer(name, classOrDescriptor, config);
  };
}
function splitChildrenBySelector(element, splitBySelctor) {
  let ret = [];
  Array.from(element.children).forEach((child) => {
    if (child.matches(splitBySelctor)) {
      ret.push(document.createDocumentFragment());
    }
    if (ret.length > 0) {
      ret[ret.length - 1].append(child);
    }
  });
  return ret;
}
function getCleanVariableValue(styleValue) {
  return styleValue.trim().replace(/^["']/g, "").replace(/["']$/, "").trim();
}
function parseConfigString(input) {
  if (input == null) {
    return {};
  }
  const obj = {};
  const lines = input.trim().split(";");
  for (let line of lines) {
    const parts = line.trim().split(":");
    if (parts.length == 2) {
      obj[parts[0].trim()] = parts[1].trim();
    }
  }
  return obj;
}
function copyDataChildAttributes(source, target) {
  Array.from(source.attributes).forEach((attr) => {
    if (attr.name.startsWith("data-child-")) {
      if (attr.name === "data-child-class") {
        target.classList.add(...attr.value.split(" ").filter((value) => value !== ""));
        return;
      }
      target.setAttribute(attr.name.substring(11), attr.value);
    }
  });
}
let slotIndex = 0;
function getTemplateFilledWithContent(templateSelector, content, origElement) {
  return __async(this, null, function* () {
    var _a;
    let templateConfig = _joda__WEBPACK_IMPORTED_MODULE_3__.Joda.getRegisteredTemplate(templateSelector);
    let templateHtml = (_a = templateConfig == null ? void 0 : templateConfig.template) != null ? _a : null;
    if (templateHtml === null) {
      let template2 = document.querySelector(templateSelector);
      if (template2 === null) {
        throw new _JodaElementException__WEBPACK_IMPORTED_MODULE_1__.JodaElementException("Template not found: " + templateSelector);
      }
      templateHtml = template2.innerHTML;
    }
    let props = getComputedStyle(origElement);
    templateHtml = (0,_QTemplate__WEBPACK_IMPORTED_MODULE_2__.template_parse)(templateHtml, {
      layout: new Proxy({}, {
        get: function(target, name) {
          var _a2;
          let val = props.getPropertyValue("--layout-" + name.toString());
          if (val === "") {
            return (_a2 = templateConfig == null ? void 0 : templateConfig.layoutDefaults[name.toString()]) != null ? _a2 : "";
          }
          if (val === "true")
            return true;
          if (val === "false")
            return false;
          return val;
        }
      })
    }, content);
    let clone = document.createRange().createContextualFragment(templateHtml);
    let done = [];
    clone.querySelectorAll("slot[data-select][data-copy]").forEach((slot2) => {
      if (done.includes(slot2)) {
        return;
      }
      done.push(slot2);
      slot2.setAttribute("_slotIndex", (++slotIndex).toString());
      let select = slot2.getAttribute("data-select");
      let selected;
      if (slot2.getAttribute("data-limit") === "1") {
        selected = Array.from([content.querySelector(select)]).map((element) => element.cloneNode(true));
      } else {
        selected = Array.from(content.querySelectorAll(select)).map((element) => element.cloneNode(true));
      }
      selected.forEach((element) => {
        copyDataChildAttributes(slot2, element);
      });
      if (selected.length === 0) {
        console.warn("No element found for selector: " + select + " in template: " + templateSelector + " for slot: ", slot2);
        return;
      }
      if (slot2.hasAttribute("data-replace") && selected) {
        slot2.replaceWith(...selected);
      } else if (selected) {
        slot2.append(...selected);
      }
    });
    clone.querySelectorAll("slot[data-select]").forEach((slot2) => {
      if (done.includes(slot2)) {
        return;
      }
      done.push(slot2);
      slot2.setAttribute("_slotIndex", (++slotIndex).toString());
      let select = slot2.getAttribute("data-select");
      let selected;
      if (slot2.getAttribute("data-limit") === "1") {
        let curElements = content.querySelector(select);
        if (curElements === null) {
          selected = [];
        } else {
          selected = Array.from([content.querySelector(select)]);
        }
      } else {
        selected = Array.from(content.querySelectorAll(select));
      }
      if (selected.length === 0) {
        console.warn("No element found for selector: " + select + " in template: " + templateSelector + " for slot: ", slot2);
        return;
      }
      selected.forEach((element) => {
        copyDataChildAttributes(slot2, element);
      });
      if (slot2.hasAttribute("data-replace") && selected) {
        slot2.replaceWith(...selected);
      } else if (selected) {
        slot2.append(...selected);
      }
    });
    let slot = clone.querySelector("slot:not([data-select])");
    if (slot !== null && slot.hasAttribute("data-class")) {
      if (done.includes(slot)) {
        return;
      }
      done.push(slot);
      slot.setAttribute("_slotIndex", (++slotIndex).toString());
      Array.from(content.children).forEach((element) => {
        element.classList.add(...slot.getAttribute("data-class").split(" ").filter((value) => value !== ""));
      });
    }
    if (slot !== null && slot.hasAttribute("data-replace")) {
      slot.replaceWith(...Array.from(content.children));
    } else if (slot !== null) {
      slot.append(...Array.from(content.children));
    } else {
      content.remove();
    }
    return clone;
  });
}
function runCallbacksForTemplate(templateSelector, element) {
  return __async(this, null, function* () {
    var _a, _b;
    let templateConfig = _joda__WEBPACK_IMPORTED_MODULE_3__.Joda.getRegisteredTemplate(templateSelector);
    if ((_a = templateConfig == null ? void 0 : templateConfig.callbacks) == null ? void 0 : _a.onAfterConnectedCallback) {
      yield templateConfig.callbacks.onAfterConnectedCallback(element);
    }
    if ((_b = templateConfig == null ? void 0 : templateConfig.callbacks) == null ? void 0 : _b.onAfterAllTemplatesConnectedCallback) {
      allTemplatesConnectedCallbacks.push(() => __async(this, null, function* () {
        return templateConfig.callbacks.onAfterAllTemplatesConnectedCallback(element);
      }));
    }
  });
}


/***/ }),

/***/ "./workspaces/jodastyle/src/helper/ka-quick-template.ts":
/*!**************************************************************!*\
  !*** ./workspaces/jodastyle/src/helper/ka-quick-template.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createElement: () => (/* binding */ createElement),
/* harmony export */   createElementTree: () => (/* binding */ createElementTree),
/* harmony export */   parseAttributeStr: () => (/* binding */ parseAttributeStr),
/* harmony export */   parseVariableAndStyleStr: () => (/* binding */ parseVariableAndStyleStr),
/* harmony export */   parseVariableStr: () => (/* binding */ parseVariableStr)
/* harmony export */ });
/* harmony import */ var _kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @kasimirjs/embed */ "./node_modules/@kasimirjs/embed/dist/index.js");

function parseVariableAndStyleStr(varString) {
  let attrs = { "$": {}, "@": {} };
  let regex = new RegExp(`([@$])[^@^$]+`, "gi");
  varString.replace(regex, (match, type) => {
    match = match.substring(1);
    if (match.indexOf("=") === -1 && type === "@") {
      if (typeof attrs[type].class === "undefined")
        attrs[type].class = "";
      attrs[type].class += " " + match;
      attrs[type].class = attrs[type].class.trim();
    } else {
      let res = match.split("=");
      attrs[type][res.shift()] = res.join("=").trim();
    }
    return "";
  });
  return attrs;
}
function parseVariableStr(varString, delimiter = "@") {
  let attrs = {};
  let regex = new RegExp(`\\${delimiter}[^${delimiter}]+`, "gi");
  varString.replace(regex, (match) => {
    match = match.substring(1);
    if (match.indexOf("=") === -1) {
      if (typeof attrs.class === "undefined")
        attrs.class = "";
      attrs.class += " " + match;
      attrs.class = attrs.class.trim();
    } else {
      let res = match.split("=");
      attrs[res.shift()] = res.join("=").trim();
    }
    return "";
  });
  return attrs;
}
function parseAttributeStr(attrString) {
  return parseVariableStr(attrString, "@");
}
function createElement(definition) {
  let defRest = definition.trim();
  let tag = "div";
  defRest = defRest.replace(/^[a-z0-9_\:\-]+/ig, (match) => {
    tag = match;
    return "";
  });
  let attrs = parseAttributeStr(defRest);
  let element = (0,_kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__.ka_create_element)(tag, attrs);
  return element;
}
function createElementTree(def) {
  let start = null;
  let leaf = null;
  let splitted = def.split(">");
  while (splitted.length > 0) {
    let cur = splitted.shift();
    let refName = null;
    cur = cur.replace(/§([a-z0-9_\-]+)/, (a, name) => {
      refName = name;
      return "";
    });
    if (cur.trim().startsWith("|")) {
      let el2 = document.createElement("div");
      if (splitted.length > 0)
        cur += ">" + splitted.join(">");
      el2.innerHTML = cur.trim().substring(1);
      el2.childNodes.forEach((e) => leaf.append(e.cloneNode(true)));
      el2.remove();
      break;
    }
    let el = createElement(cur);
    if (start === null) {
      start = leaf = el;
    } else {
      if (leaf instanceof HTMLTemplateElement) {
        leaf.content.appendChild(el);
      } else {
        leaf.appendChild(el);
      }
      leaf = el;
    }
  }
  return { start, leaf };
}


/***/ }),

/***/ "./workspaces/jodastyle/src/helper/logger.ts":
/*!***************************************************!*\
  !*** ./workspaces/jodastyle/src/helper/logger.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Logger: () => (/* binding */ Logger)
/* harmony export */ });
class Logger {
  constructor(name) {
    this.name = name;
  }
  log(...args) {
    console.log("[" + this.name + "]", ...args);
  }
  warn(...args) {
    console.warn("[" + this.name + "]", ...args);
  }
}


/***/ }),

/***/ "./workspaces/jodastyle/src/index.ts":
/*!*******************************************!*\
  !*** ./workspaces/jodastyle/src/index.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DefaultLayout: () => (/* reexport safe */ _types_DefaultLayout__WEBPACK_IMPORTED_MODULE_6__.DefaultLayout),
/* harmony export */   Joda: () => (/* reexport safe */ _joda__WEBPACK_IMPORTED_MODULE_11__.Joda),
/* harmony export */   JodaContentElement: () => (/* reexport safe */ _component_joda_content_element__WEBPACK_IMPORTED_MODULE_1__.JodaContentElement),
/* harmony export */   JodaDescriptionManager: () => (/* reexport safe */ _helper_JodaDescriptionManager__WEBPACK_IMPORTED_MODULE_7__.JodaDescriptionManager),
/* harmony export */   Jodasplit: () => (/* reexport safe */ _processor_jodasplit__WEBPACK_IMPORTED_MODULE_9__.Jodasplit),
/* harmony export */   Logger: () => (/* reexport safe */ _helper_logger__WEBPACK_IMPORTED_MODULE_8__.Logger),
/* harmony export */   QTemplate: () => (/* reexport safe */ _helper_QTemplate__WEBPACK_IMPORTED_MODULE_5__.QTemplate),
/* harmony export */   __JodaDescriptionManager: () => (/* reexport safe */ _helper_JodaDescriptionManager__WEBPACK_IMPORTED_MODULE_7__.__JodaDescriptionManager),
/* harmony export */   allTemplatesConnectedCallbacks: () => (/* reexport safe */ _helper_functions__WEBPACK_IMPORTED_MODULE_4__.allTemplatesConnectedCallbacks),
/* harmony export */   await_property: () => (/* reexport safe */ _helper_functions__WEBPACK_IMPORTED_MODULE_4__.await_property),
/* harmony export */   getCleanVariableValue: () => (/* reexport safe */ _helper_functions__WEBPACK_IMPORTED_MODULE_4__.getCleanVariableValue),
/* harmony export */   getTemplateFilledWithContent: () => (/* reexport safe */ _helper_functions__WEBPACK_IMPORTED_MODULE_4__.getTemplateFilledWithContent),
/* harmony export */   jodaRenderer: () => (/* reexport safe */ _helper_functions__WEBPACK_IMPORTED_MODULE_4__.jodaRenderer),
/* harmony export */   jodaSiteConfig: () => (/* reexport safe */ _helper_JodaSiteConfig__WEBPACK_IMPORTED_MODULE_10__.jodaSiteConfig),
/* harmony export */   parseConfigString: () => (/* reexport safe */ _helper_functions__WEBPACK_IMPORTED_MODULE_4__.parseConfigString),
/* harmony export */   registerJodaRenderer: () => (/* reexport safe */ _helper_functions__WEBPACK_IMPORTED_MODULE_4__.registerJodaRenderer),
/* harmony export */   runCallbacksForTemplate: () => (/* reexport safe */ _helper_functions__WEBPACK_IMPORTED_MODULE_4__.runCallbacksForTemplate),
/* harmony export */   splitChildrenBySelector: () => (/* reexport safe */ _helper_functions__WEBPACK_IMPORTED_MODULE_4__.splitChildrenBySelector),
/* harmony export */   template_parse: () => (/* reexport safe */ _helper_QTemplate__WEBPACK_IMPORTED_MODULE_5__.template_parse),
/* harmony export */   wrapElement: () => (/* reexport safe */ _helper_functions__WEBPACK_IMPORTED_MODULE_4__.wrapElement)
/* harmony export */ });
/* harmony import */ var _helper_JodaRenderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper/JodaRenderer */ "./workspaces/jodastyle/src/helper/JodaRenderer.ts");
/* harmony import */ var _helper_JodaRenderer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_helper_JodaRenderer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _helper_JodaRenderer__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _helper_JodaRenderer__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _component_joda_content_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component/joda-content-element */ "./workspaces/jodastyle/src/component/joda-content-element.ts");
/* harmony import */ var _component_joda_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/joda-fetch */ "./workspaces/jodastyle/src/component/joda-fetch.ts");
/* harmony import */ var _component_joda_split__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/joda-split */ "./workspaces/jodastyle/src/component/joda-split.ts");
/* harmony import */ var _helper_functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helper/functions */ "./workspaces/jodastyle/src/helper/functions.ts");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _helper_JodaRenderer__WEBPACK_IMPORTED_MODULE_0__) if(["default","JodaContentElement","allTemplatesConnectedCallbacks","await_property","getCleanVariableValue","getTemplateFilledWithContent","jodaRenderer","parseConfigString","registerJodaRenderer","runCallbacksForTemplate","splitChildrenBySelector","wrapElement"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _helper_JodaRenderer__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _helper_QTemplate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helper/QTemplate */ "./workspaces/jodastyle/src/helper/QTemplate.ts");
/* harmony import */ var _types_DefaultLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./types/DefaultLayout */ "./workspaces/jodastyle/src/types/DefaultLayout.ts");
/* harmony import */ var _helper_JodaDescriptionManager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./helper/JodaDescriptionManager */ "./workspaces/jodastyle/src/helper/JodaDescriptionManager.ts");
/* harmony import */ var _helper_logger__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./helper/logger */ "./workspaces/jodastyle/src/helper/logger.ts");
/* harmony import */ var _processor_jodasplit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./processor/jodasplit */ "./workspaces/jodastyle/src/processor/jodasplit.ts");
/* harmony import */ var _helper_JodaSiteConfig__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./helper/JodaSiteConfig */ "./workspaces/jodastyle/src/helper/JodaSiteConfig.ts");
/* harmony import */ var _joda__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./joda */ "./workspaces/jodastyle/src/joda.ts");















/***/ }),

/***/ "./workspaces/jodastyle/src/joda.ts":
/*!******************************************!*\
  !*** ./workspaces/jodastyle/src/joda.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Joda: () => (/* binding */ Joda)
/* harmony export */ });
const Joda = new class {
  /**
   * Register a template instead of adding <template id="...">...</template> to the DOM
   *
   * @param id
   * @param data
   * @param layoutDefaults
   * @param callbacks
   */
  registerTemplate(id, data, layoutDefaults = {}, callbacks = {}) {
    if (!window["jodastyle"])
      window["jodastyle"] = {};
    if (!window["jodastyle"]["templates"])
      window["jodastyle"]["templates"] = {};
    window["jodastyle"]["templates"][id] = {
      template: data,
      layoutDefaults,
      callbacks
    };
  }
  getRegisteredTemplate(id) {
    var _a, _b, _c;
    if (id.startsWith("#"))
      id = id.substring(1);
    return (_c = (_b = (_a = window["jodastyle"]) == null ? void 0 : _a["templates"]) == null ? void 0 : _b[id]) != null ? _c : null;
  }
}();


/***/ }),

/***/ "./workspaces/jodastyle/src/processor/LayoutProcessor.ts":
/*!***************************************************************!*\
  !*** ./workspaces/jodastyle/src/processor/LayoutProcessor.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LayoutProcessor: () => (/* binding */ LayoutProcessor)
/* harmony export */ });
/* harmony import */ var _helper_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper/functions */ "./workspaces/jodastyle/src/helper/functions.ts");

const commands = ["use", "wrap"];
class LayoutProcessor {
  constructor(logger) {
    this.logger = logger;
  }
  processNode(node) {
    if (!node.hasAttribute("layout"))
      return node;
    let layout = (0,_helper_functions__WEBPACK_IMPORTED_MODULE_0__.parseConfigString)(node.getAttribute("layout"));
    for (let key in layout) {
      if (commands.includes(key)) {
        node.style.setProperty("--joda-" + key, layout[key]);
        continue;
      }
      node.style.setProperty("--layout-" + key, layout[key]);
    }
    return node;
  }
}


/***/ }),

/***/ "./workspaces/jodastyle/src/processor/jodaresponsive.ts":
/*!**************************************************************!*\
  !*** ./workspaces/jodastyle/src/processor/jodaresponsive.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Jodaresponsive: () => (/* binding */ Jodaresponsive),
/* harmony export */   breakpoints: () => (/* binding */ breakpoints),
/* harmony export */   getCurrentBreakpoint: () => (/* binding */ getCurrentBreakpoint),
/* harmony export */   parseClassStr: () => (/* binding */ parseClassStr)
/* harmony export */ });
const breakpoints = {
  "xsm": 0,
  "sm": 576,
  "md": 768,
  "lg": 992,
  "xl": 1200,
  "xxl": 1400
};
function getCurrentBreakpoint() {
  let ret = "";
  Object.keys(breakpoints).forEach((key) => {
    if (window.innerWidth >= breakpoints[key]) {
      ret = key;
    }
  });
  return ret;
}
class ResponsiveClass {
  constructor() {
    this.always = [];
    this.default = null;
    this.xsm = null;
    this.xs = null;
    this.sm = null;
    this.md = null;
    this.lg = null;
    this.xl = null;
    this.xxl = null;
    this.breakpoints = ["xsm", "xs", "sm", "md", "lg", "xl", "xxl"];
  }
  getClassesForBreakpoint(breakpoint = null) {
    if (breakpoint === null) {
      breakpoint = getCurrentBreakpoint();
    }
    let ret = [];
    ret.push(...this.always);
    let isDefault = true;
    for (let bp of this.breakpoints) {
      if (this[bp] !== null) {
        ret = this[bp];
        isDefault = false;
      }
      if (bp === breakpoint) {
        break;
      }
    }
    if (isDefault && this.default !== null) {
      ret.push(...this.default);
    }
    ret = ret.filter((item) => item !== "");
    return ret;
  }
}
function parseClassStr(input) {
  let ret = new ResponsiveClass();
  let pointer = "always";
  input.split(" ").map((item) => {
    let matches = item.match(/\:([a-zA-Z]*)\:/);
    if (matches === null) {
      ret[pointer].push(item);
      return;
    }
    pointer = matches[1];
    if (pointer === "") {
      pointer = "default";
    }
    if (ret[pointer] === null) {
      ret[pointer] = [];
    }
  });
  return ret;
}
class Jodaresponsive {
  constructor(logger) {
    this.logger = logger;
  }
  processNode(node) {
    var _a;
    const origAttr = "data-class-orig";
    if (!node.hasAttribute(origAttr)) {
      let classes2 = (_a = node.getAttribute("class")) != null ? _a : "";
      if (classes2.indexOf(":") === -1)
        return;
      node.setAttribute(origAttr, classes2);
    }
    let classes = node.getAttribute(origAttr);
    let responsiveClasses = parseClassStr(classes);
    node.setAttribute("class", "");
    node.classList.add(...responsiveClasses.always.filter((item) => item !== ""));
    node.classList.add(...responsiveClasses.getClassesForBreakpoint());
  }
  process(node) {
    Array.from([node, ...Array.from(node.querySelectorAll("*"))]).forEach((child) => {
      this.processNode(child);
    });
  }
}


/***/ }),

/***/ "./workspaces/jodastyle/src/processor/jodashorts.ts":
/*!**********************************************************!*\
  !*** ./workspaces/jodastyle/src/processor/jodashorts.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Jodashorts: () => (/* binding */ Jodashorts)
/* harmony export */ });
class Jodashorts {
  constructor(logger) {
    this.logger = logger;
  }
  process(source) {
    source = source.replace(/\[([a-z0-9\-)]+)(.*?)]/g, (match, name, attrStr) => {
      let attrs = {
        "class": []
      };
      attrStr = attrStr.replace(/”/g, '"').replace(/“/g, '"').replace(/‘/g, "'").replace(/’/g, "'");
      attrStr = attrStr.replace(/([a-z0-9\-\.]+)=(["'])(.*?)\2/mig, (match2, name2, quote, value) => {
        if (name2 === "class") {
          attrs["class"].push(...value.split(" "));
          return "";
        }
        attrs[name2] = value;
        return "";
      });
      attrStr.split(" ").forEach((attr) => {
        attr = attr.trim();
        if (attr === "")
          return;
        if (attr.startsWith(".")) {
          attrs["class"].push(attr.substr(1));
          return;
        }
        attrs[attr] = "";
      });
      let attrstr = "";
      for (let attr in attrs) {
        if (attr === "class") {
          attrstr += ` class="${attrs[attr].join(" ")}"`;
        } else {
          attrstr += ` ${attr}="${attrs[attr]}"`;
        }
      }
      let ret = `<${name}${attrstr}></${name}>`;
      return ret;
    });
    return source;
  }
}


/***/ }),

/***/ "./workspaces/jodastyle/src/processor/jodasplit.ts":
/*!*********************************************************!*\
  !*** ./workspaces/jodastyle/src/processor/jodasplit.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Jodasplit: () => (/* binding */ Jodasplit)
/* harmony export */ });
/* harmony import */ var _kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @kasimirjs/embed */ "./node_modules/@kasimirjs/embed/dist/index.js");
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var _target, _parents, _currentParent, _currentContent, _currentChildren;

function copySectionAttributes(source, target) {
  source.getAttributeNames().forEach((name) => {
    if (!name.startsWith("data-section-")) {
      return;
    }
    let value = source.getAttribute(name);
    name = name.substr(13);
    if (name === "class") {
      target.classList.add(...value.split(" ").filter((c) => c.length > 0));
      return;
    }
    if (name === "style") {
      target.setAttribute("style", (target.getAttribute("style") || "") + value);
      return;
    }
    target.setAttribute(name, value);
  });
}
class Jodasplit {
  constructor(logger) {
    this.logger = logger;
    __privateAdd(this, _target, document.createDocumentFragment());
    __privateAdd(this, _parents, [__privateGet(this, _target)]);
    __privateAdd(this, _currentParent, (0,_kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__.ka_create_element)("section", { class: "section-h1pre" }));
    __privateAdd(this, _currentContent, (0,_kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__.ka_create_element)("div", { class: "content" }, [], __privateGet(this, _currentParent)));
    __privateAdd(this, _currentChildren, (0,_kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__.ka_create_element)("div", { class: "children" }, [], __privateGet(this, _currentParent)));
  }
  findParentElement(layer) {
    while (__privateGet(this, _parents).length > layer) {
      __privateGet(this, _parents).pop();
    }
    while (__privateGet(this, _parents)[__privateGet(this, _parents).length - 1] === void 0) {
      __privateGet(this, _parents).pop();
    }
    return __privateGet(this, _parents)[__privateGet(this, _parents).length - 1];
  }
  createNewElement(tagName, layer, tag) {
    tagName = tagName.toLowerCase();
    let curParent = this.findParentElement(layer);
    let curParentChildren = curParent.childNodes[1];
    __privateSet(this, _currentParent, (0,_kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__.ka_create_element)(tag, { class: "section-" + tagName }));
    while (__privateGet(this, _parents).length < layer) {
      __privateGet(this, _parents).push(void 0);
    }
    __privateGet(this, _parents).push(__privateGet(this, _currentParent));
    if (curParent === __privateGet(this, _target)) {
      curParent.appendChild(__privateGet(this, _currentParent));
    } else {
      curParentChildren.append(__privateGet(this, _currentParent));
    }
    __privateSet(this, _currentContent, (0,_kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__.ka_create_element)("div", { class: "content" }, [], __privateGet(this, _currentParent)));
    __privateSet(this, _currentChildren, (0,_kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__.ka_create_element)("div", { class: "children" }, [], __privateGet(this, _currentParent)));
    return __privateGet(this, _currentParent);
  }
  process(source) {
    let lastLayer = 1;
    __privateGet(this, _target).append(__privateGet(this, _currentParent));
    Array.from(source.children).forEach((child) => {
      if (child instanceof HTMLElement && child.matches("footer")) {
        __privateGet(this, _target).appendChild(child);
        return;
      }
      if (child instanceof HTMLElement && child.matches("h1, h2, h3, h4, h5, h6, h7, h8, h9, hr:not(.hr), .section-h2, .section-h3, .section-h4")) {
        let layer = 1;
        let tag = "div";
        if (child.matches("h1,h2,.section-h2")) {
          layer = lastLayer = 1;
          tag = "section";
        } else if (child.matches("h3, h4, h5, h6, h7, h8, h9, .section-h3, .section-h4")) {
          if (child.matches(".section-h3")) {
            layer = lastLayer = 6;
          } else if (child.matches(".section-h4")) {
            layer = lastLayer = 8;
          } else {
            layer = lastLayer = parseInt(child.tagName.substr(1)) * 2;
          }
          tag = "div";
        } else if (child.matches("hr")) {
          layer = lastLayer + 1;
          tag = "div";
        }
        let e = this.createNewElement(child.tagName.toLowerCase(), layer, tag);
        e.setAttribute("layout", child.getAttribute("layout") || "");
        child.removeAttribute("layout");
        copySectionAttributes(child, e);
        if (child.tagName === "HR" && !child.classList.contains("hr")) {
          e.setAttribute("style", child.getAttribute("style") || "");
          child.removeAttribute("style");
          e.classList.add(...child.classList);
          child.setAttribute("orig-class", child.getAttribute("class") || "");
          child.setAttribute("class", "");
        }
      }
      if (child.tagName === "HR" && !child.classList.contains("hr")) {
        child.setAttribute("orig-pre-split-class", child.getAttribute("class"));
        child.setAttribute("class", "d-none");
      }
      __privateGet(this, _currentContent).appendChild(child);
    });
    Array.from(__privateGet(this, _target).querySelectorAll(".children")).forEach((child) => {
      if (child.children.length === 0) {
        child.remove();
      }
    });
    Array.from(__privateGet(this, _target).querySelectorAll(".content")).forEach((child) => {
      if (child.children.length === 0) {
        child.remove();
      }
    });
    return __privateGet(this, _target);
  }
}
_target = new WeakMap();
_parents = new WeakMap();
_currentParent = new WeakMap();
_currentContent = new WeakMap();
_currentChildren = new WeakMap();


/***/ }),

/***/ "./workspaces/jodastyle/src/processor/jodastyle-commands.ts":
/*!******************************************************************!*\
  !*** ./workspaces/jodastyle/src/processor/jodastyle-commands.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   jodaStyleCommands: () => (/* binding */ jodaStyleCommands)
/* harmony export */ });
/* harmony import */ var _helper_ka_quick_template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper/ka-quick-template */ "./workspaces/jodastyle/src/helper/ka-quick-template.ts");
/* harmony import */ var _helper_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helper/functions */ "./workspaces/jodastyle/src/helper/functions.ts");
/* harmony import */ var _kasimirjs_embed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @kasimirjs/embed */ "./node_modules/@kasimirjs/embed/dist/index.js");
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};



let jodaStyleCommands = {};
jodaStyleCommands["--joda-replace-by"] = (value, target, element, logger) => {
  let parent = element.parentElement;
  let ret = (0,_helper_ka_quick_template__WEBPACK_IMPORTED_MODULE_0__.createElementTree)(value);
  parent.replaceChild(ret.start, element);
  Array.from(element.children).forEach((child) => {
    ret.leaf.append(child);
  });
  element.remove();
  return ret.leaf;
};
jodaStyleCommands["--joda-wrap"] = (value, target, element, logger) => __async(void 0, null, function* () {
  let parent = element.parentElement;
  if (value.startsWith("#")) {
    console.log("Wrap element", element, "with template", value);
    let placeholder = document.createElement("div");
    parent.insertBefore(placeholder, element);
    placeholder.append(element);
    let newElement = yield (0,_helper_functions__WEBPACK_IMPORTED_MODULE_1__.getTemplateFilledWithContent)(value, placeholder, element);
    placeholder.replaceWith(newElement);
    yield (0,_helper_functions__WEBPACK_IMPORTED_MODULE_1__.runCallbacksForTemplate)(value, element);
    return element;
  } else {
    let ret = (0,_helper_ka_quick_template__WEBPACK_IMPORTED_MODULE_0__.createElementTree)(value);
    parent.replaceChild(ret.start, element);
    ret.leaf.append(element);
    return element;
  }
});
jodaStyleCommands["--joda-container"] = (value, target, element, logger) => {
  let ret = (0,_helper_ka_quick_template__WEBPACK_IMPORTED_MODULE_0__.createElementTree)(value);
  Array.from(element.children).forEach((child) => {
    ret.leaf.append(child);
  });
  element.append(ret.start);
  return element;
};
jodaStyleCommands["--joda-unwrap"] = (value, target, element, logger) => {
  let parent = element.parentElement;
  let grandParent = parent.parentElement;
  grandParent.insertBefore(element, parent);
  if (parent.children.length === 0) {
    parent.remove();
  }
  return element;
};
jodaStyleCommands["--joda-group"] = (value, target, element, logger) => {
  const groupByKey = "jodaIsGroupedBy";
  if (element[groupByKey] !== void 0) {
    return element;
  }
  let siblings = [];
  let curSibling = element.nextElementSibling;
  while (curSibling && (0,_helper_functions__WEBPACK_IMPORTED_MODULE_1__.getCleanVariableValue)(getComputedStyle(curSibling).getPropertyValue("--joda-group")) === value) {
    siblings.push(curSibling);
    curSibling[groupByKey] = true;
    curSibling = curSibling.nextElementSibling;
  }
  let parent = element.parentElement;
  let ret = (0,_helper_ka_quick_template__WEBPACK_IMPORTED_MODULE_0__.createElementTree)(value);
  element.parentElement.insertBefore(ret.start, element);
  ret.leaf.append(element);
  siblings.forEach((sibling) => {
    ret.leaf.append(sibling);
  });
  return element;
};
jodaStyleCommands["--joda-class"] = (value, target, element, logger) => {
  let ret = (0,_helper_ka_quick_template__WEBPACK_IMPORTED_MODULE_0__.createElementTree)(value);
  element.setAttribute("class", element.getAttribute("class") + " " + value);
  return element;
};
jodaStyleCommands["--joda-use"] = (value, target, element, logger) => __async(void 0, null, function* () {
  if (value.startsWith("#")) {
    let placeholder = document.createElement("div");
    Array.from(element.children).forEach((child) => {
      placeholder.append(child);
    });
    let newElement = yield (0,_helper_functions__WEBPACK_IMPORTED_MODULE_1__.getTemplateFilledWithContent)(value, placeholder, element);
    let firstElement = newElement.firstElementChild;
    firstElement["joda-style-processed"] = true;
    let debugElement = element.outerHTML.split("\n")[0];
    firstElement.setAttribute("_orig_elem", debugElement);
    element.getAttributeNames().forEach((attrName) => {
      if (attrName === "class") {
        firstElement.setAttribute(attrName, element.getAttribute(attrName) + " " + firstElement.getAttribute(attrName));
        return;
      }
      if (attrName === "style") {
        firstElement.setAttribute(attrName, element.getAttribute(attrName) + " " + firstElement.getAttribute(attrName));
        return;
      }
      if (attrName.startsWith("layout")) {
        firstElement.setAttribute("layout-orig", element.getAttribute(attrName));
        return;
      }
      firstElement.setAttribute(attrName, element.getAttribute(attrName));
    });
    element.parentElement.insertBefore(newElement, element);
    element.parentElement.removeChild(element);
    yield (0,_helper_functions__WEBPACK_IMPORTED_MODULE_1__.runCallbacksForTemplate)(value, firstElement);
    return firstElement;
  }
  let matches = value.match(/([a-z0-9\_-]+)\s*\((.*?)\)/);
  if (!matches) {
    console.error("Invalid --joda-use command: ", value, "in element", element, " should be in format: commandName(arg1: value1, arg2: value2, ...)");
    throw "Invalid --joda-use command: " + value + " should be in format: commandName(arg1: value1, arg2: value2, ...)";
  }
  logger.log("Using renderer: ", matches[1], "with args: ", matches[2], "on element", element);
  let commandName = matches[1];
  let args = (0,_kasimirjs_embed__WEBPACK_IMPORTED_MODULE_2__.ka_eval)("{" + matches[2] + "}", {}, target, {});
  let command = yield (0,_helper_functions__WEBPACK_IMPORTED_MODULE_1__.await_property)(window, ["jodastyle", "renderer", commandName]);
  let config = new command.config();
  let style = getComputedStyle(element);
  Object.keys(config).forEach((key) => {
    let val = style.getPropertyValue("--layout-" + key.replace(/\_/g, "-"));
    if (val !== "") {
      config[key] = val.replace(/^["']/g, "").replace(/["']$/, "").trim();
    }
  });
  Object.assign(config, args);
  return yield new command.renderer().render(element, config);
});
jodaStyleCommands["--joda-on-empty-class"] = (value, target, element, logger) => __async(void 0, null, function* () {
  console.log("Check if element is empty", element.textContent.trim(), "and add class", value);
  if (element.textContent.trim() === "") {
    element.classList.add(value);
  }
  return element;
});


/***/ }),

/***/ "./workspaces/jodastyle/src/processor/jodastyle.ts":
/*!*********************************************************!*\
  !*** ./workspaces/jodastyle/src/processor/jodastyle.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Jodastyle: () => (/* binding */ Jodastyle)
/* harmony export */ });
/* harmony import */ var _jodastyle_commands__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jodastyle-commands */ "./workspaces/jodastyle/src/processor/jodastyle-commands.ts");
/* harmony import */ var _helper_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helper/functions */ "./workspaces/jodastyle/src/helper/functions.ts");
/* harmony import */ var _kasimirjs_embed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @kasimirjs/embed */ "./node_modules/@kasimirjs/embed/dist/index.js");
/* harmony import */ var _helper_JodaElementException__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helper/JodaElementException */ "./workspaces/jodastyle/src/helper/JodaElementException.ts");
/* harmony import */ var _helper_JodaErrorElement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helper/JodaErrorElement */ "./workspaces/jodastyle/src/helper/JodaErrorElement.ts");
/* harmony import */ var _LayoutProcessor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LayoutProcessor */ "./workspaces/jodastyle/src/processor/LayoutProcessor.ts");
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};






class Jodastyle {
  constructor(logger) {
    this.logger = logger;
  }
  process(node) {
    return __async(this, null, function* () {
      for (let child of Array.from(node.getElementsByTagName("joda-split"))) {
        while (child["ready"] !== true) {
          yield (0,_kasimirjs_embed__WEBPACK_IMPORTED_MODULE_2__.ka_sleep)(10);
        }
      }
      let layoutProcessor = new _LayoutProcessor__WEBPACK_IMPORTED_MODULE_5__.LayoutProcessor(this.logger);
      node.querySelectorAll("[layout]").forEach((node2) => {
        layoutProcessor.processNode(node2);
      });
      for (let child of [node, ...Array.from(node.children)]) {
        if (child["joda-style-processed"] === true) {
          continue;
        }
        child["joda-style-processed"] = true;
        let style = getComputedStyle(child);
        let parentStyle = null;
        if (child.parentElement) {
          parentStyle = getComputedStyle(child.parentElement);
        }
        let keys = Object.keys(_jodastyle_commands__WEBPACK_IMPORTED_MODULE_0__.jodaStyleCommands);
        for (let key of Array.from(keys)) {
          let styleValue = style.getPropertyValue(key);
          if (styleValue === "") {
            continue;
          }
          if (parentStyle !== null && styleValue === parentStyle.getPropertyValue(key)) {
            continue;
          }
          styleValue = (0,_helper_functions__WEBPACK_IMPORTED_MODULE_1__.getCleanVariableValue)(styleValue);
          let command = _jodastyle_commands__WEBPACK_IMPORTED_MODULE_0__.jodaStyleCommands[key];
          try {
            child = yield command(styleValue, node, child, this.logger);
          } catch (e) {
            if (e instanceof _helper_JodaElementException__WEBPACK_IMPORTED_MODULE_3__.JodaElementException) {
              e.triggerCommand = key + ": " + styleValue;
              this.logger.warn(e.message, e.element);
              child.replaceWith(new _helper_JodaErrorElement__WEBPACK_IMPORTED_MODULE_4__.JodaErrorElement(e.message + " (trigger by: " + e.triggerCommand + ")"));
            } else {
              this.logger.warn("Unhandled exception", e, "on element", child, "triggered by", key + ": " + styleValue);
              throw e;
            }
          }
        }
        yield this.process(child);
      }
    });
  }
}


/***/ }),

/***/ "./workspaces/jodastyle/src/processor/jodavisualize.ts":
/*!*************************************************************!*\
  !*** ./workspaces/jodastyle/src/processor/jodavisualize.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Jodavisualize: () => (/* binding */ Jodavisualize)
/* harmony export */ });
/* harmony import */ var _kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @kasimirjs/embed */ "./node_modules/@kasimirjs/embed/dist/index.js");

class Jodavisualize {
  process(element) {
    [element, ...Array.from(element.querySelectorAll("*"))].forEach((e) => {
      e.insertBefore((0,_kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__.ka_create_element)("div", { class: "joda-visualize" }, `<${e.tagName.toLowerCase()}  class="${Array.from(e.classList).join(", ")}">`), e.firstElementChild);
    });
  }
}


/***/ }),

/***/ "./workspaces/jodastyle/src/types/DefaultLayout.ts":
/*!*********************************************************!*\
  !*** ./workspaces/jodastyle/src/types/DefaultLayout.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DefaultLayout: () => (/* binding */ DefaultLayout)
/* harmony export */ });
class DefaultLayout {
  constructor() {
    this.container = "container";
    this.break1 = "xl";
  }
}


/***/ }),

/***/ "./src/_index.scss":
/*!*************************!*\
  !*** ./src/_index.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./_index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/_index.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!***************************!*\
  !*** ./showcase/index.ts ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _theme_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../theme/index */ "./theme/index.ts");




})();

/******/ })()
;
//# sourceMappingURL=index.js.map