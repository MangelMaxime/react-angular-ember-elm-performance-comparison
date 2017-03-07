/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/public";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 89);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Symbol__ = __webpack_require__(2);
/* unused harmony export NonDeclaredType */
/* unused harmony export Any */
/* unused harmony export Unit */
/* unused harmony export Option */
/* unused harmony export Array */
/* unused harmony export Tuple */
/* unused harmony export GenericParam */
/* unused harmony export Interface */
/* harmony export (immutable) */ __webpack_exports__["c"] = makeGeneric;
/* unused harmony export isGeneric */
/* unused harmony export getDefinition */
/* unused harmony export extendInfo */
/* unused harmony export hasInterface */
/* unused harmony export getPropertyNames */
/* unused harmony export isArray */
/* harmony export (immutable) */ __webpack_exports__["i"] = getRestParams;
/* harmony export (immutable) */ __webpack_exports__["h"] = toString;
/* unused harmony export hash */
/* harmony export (immutable) */ __webpack_exports__["f"] = equals;
/* harmony export (immutable) */ __webpack_exports__["g"] = compare;
/* harmony export (immutable) */ __webpack_exports__["a"] = equalsRecords;
/* harmony export (immutable) */ __webpack_exports__["b"] = compareRecords;
/* harmony export (immutable) */ __webpack_exports__["d"] = equalsUnions;
/* harmony export (immutable) */ __webpack_exports__["e"] = compareUnions;
/* unused harmony export createDisposable */
/* unused harmony export createObj */
/* unused harmony export toPlainJsObj */
/* unused harmony export round */
/* unused harmony export randomNext */
/* unused harmony export defaultArg */

var NonDeclaredType = (function () {
    function NonDeclaredType(kind, definition, generics) {
        this.kind = kind;
        this.definition = definition;
        this.generics = generics;
    }
    NonDeclaredType.prototype.Equals = function (other) {
        if (this.kind === other.kind && this.definition === other.definition) {
            return typeof this.generics === "object"
                ? equalsRecords(this.generics, other.generics)
                : this.generics === other.generics;
        }
        return false;
    };
    return NonDeclaredType;
}());

var Any = new NonDeclaredType("Any");
var Unit = new NonDeclaredType("Unit");
function Option(t) {
    return new NonDeclaredType("Option", null, t);
}
function FableArray(t, isTypedArray) {
    if (isTypedArray === void 0) { isTypedArray = false; }
    var def = null, genArg = null;
    if (isTypedArray) {
        def = t;
    }
    else {
        genArg = t;
    }
    return new NonDeclaredType("Array", def, genArg);
}

function Tuple(ts) {
    return new NonDeclaredType("Tuple", null, ts);
}
function GenericParam(definition) {
    return new NonDeclaredType("GenericParam", definition);
}
function Interface(definition) {
    return new NonDeclaredType("Interface", definition);
}
function makeGeneric(typeDef, genArgs) {
    return new NonDeclaredType("GenericType", typeDef, genArgs);
}
function isGeneric(typ) {
    return typ instanceof NonDeclaredType && typ.kind === "GenericType";
}
function getDefinition(typ) {
    return isGeneric(typ) ? typ.definition : typ;
}
function extendInfo(cons, info) {
    var parent = Object.getPrototypeOf(cons.prototype);
    if (typeof parent[__WEBPACK_IMPORTED_MODULE_0__Symbol__["a" /* default */].reflection] === "function") {
        var newInfo_1 = {}, parentInfo_1 = parent[__WEBPACK_IMPORTED_MODULE_0__Symbol__["a" /* default */].reflection]();
        Object.getOwnPropertyNames(info).forEach(function (k) {
            var i = info[k];
            if (typeof i === "object") {
                newInfo_1[k] = Array.isArray(i)
                    ? (parentInfo_1[k] || []).concat(i)
                    : Object.assign(parentInfo_1[k] || {}, i);
            }
            else {
                newInfo_1[k] = i;
            }
        });
        return newInfo_1;
    }
    return info;
}
function hasInterface(obj, interfaceName) {
    if (interfaceName === "System.Collections.Generic.IEnumerable") {
        return typeof obj[Symbol.iterator] === "function";
    }
    else if (typeof obj[__WEBPACK_IMPORTED_MODULE_0__Symbol__["a" /* default */].reflection] === "function") {
        var interfaces = obj[__WEBPACK_IMPORTED_MODULE_0__Symbol__["a" /* default */].reflection]().interfaces;
        return Array.isArray(interfaces) && interfaces.indexOf(interfaceName) > -1;
    }
    return false;
}
function getPropertyNames(obj) {
    if (obj == null) {
        return [];
    }
    var propertyMap = typeof obj[__WEBPACK_IMPORTED_MODULE_0__Symbol__["a" /* default */].reflection] === "function" ? obj[__WEBPACK_IMPORTED_MODULE_0__Symbol__["a" /* default */].reflection]().properties || [] : obj;
    return Object.getOwnPropertyNames(propertyMap);
}
function isArray(obj) {
    return Array.isArray(obj) || ArrayBuffer.isView(obj);
}
function getRestParams(args, idx) {
    for (var _len = args.length, restArgs = Array(_len > idx ? _len - idx : 0), _key = idx; _key < _len; _key++)
        restArgs[_key - idx] = args[_key];
    return restArgs;
}
function toString(o) {
    return o != null && typeof o.ToString == "function" ? o.ToString() : String(o);
}
function hash(x) {
    var s = JSON.stringify(x);
    var h = 5381, i = 0, len = s.length;
    while (i < len) {
        h = (h * 33) ^ s.charCodeAt(i++);
    }
    return h;
}
function equals(x, y) {
    if (x === y)
        return true;
    else if (x == null)
        return y == null;
    else if (y == null)
        return false;
    else if (Object.getPrototypeOf(x) !== Object.getPrototypeOf(y))
        return false;
    else if (typeof x.Equals === "function")
        return x.Equals(y);
    else if (Array.isArray(x)) {
        if (x.length != y.length)
            return false;
        for (var i = 0; i < x.length; i++)
            if (!equals(x[i], y[i]))
                return false;
        return true;
    }
    else if (ArrayBuffer.isView(x)) {
        if (x.byteLength !== y.byteLength)
            return false;
        var dv1 = new DataView(x.buffer), dv2 = new DataView(y.buffer);
        for (var i = 0; i < x.byteLength; i++)
            if (dv1.getUint8(i) !== dv2.getUint8(i))
                return false;
        return true;
    }
    else if (x instanceof Date)
        return x.getTime() == y.getTime();
    else
        return false;
}
function compare(x, y) {
    if (x === y)
        return 0;
    if (x == null)
        return y == null ? 0 : -1;
    else if (y == null)
        return 1;
    else if (Object.getPrototypeOf(x) !== Object.getPrototypeOf(y))
        return -1;
    else if (typeof x.CompareTo === "function")
        return x.CompareTo(y);
    else if (Array.isArray(x)) {
        if (x.length != y.length)
            return x.length < y.length ? -1 : 1;
        for (var i = 0, j = 0; i < x.length; i++)
            if ((j = compare(x[i], y[i])) !== 0)
                return j;
        return 0;
    }
    else if (ArrayBuffer.isView(x)) {
        if (x.byteLength != y.byteLength)
            return x.byteLength < y.byteLength ? -1 : 1;
        var dv1 = new DataView(x.buffer), dv2 = new DataView(y.buffer);
        for (var i = 0, b1 = 0, b2 = 0; i < x.byteLength; i++) {
            b1 = dv1.getUint8(i), b2 = dv2.getUint8(i);
            if (b1 < b2)
                return -1;
            if (b1 > b2)
                return 1;
        }
        return 0;
    }
    else if (x instanceof Date)
        return compare(x.getTime(), y.getTime());
    else
        return x < y ? -1 : 1;
}
function equalsRecords(x, y) {
    if (x === y) {
        return true;
    }
    else {
        var keys = getPropertyNames(x);
        for (var i = 0; i < keys.length; i++) {
            if (!equals(x[keys[i]], y[keys[i]]))
                return false;
        }
        return true;
    }
}
function compareRecords(x, y) {
    if (x === y) {
        return 0;
    }
    else {
        var keys = getPropertyNames(x);
        for (var i = 0; i < keys.length; i++) {
            var res = compare(x[keys[i]], y[keys[i]]);
            if (res !== 0)
                return res;
        }
        return 0;
    }
}
function equalsUnions(x, y) {
    if (x === y) {
        return true;
    }
    else if (x.Case !== y.Case) {
        return false;
    }
    else {
        for (var i = 0; i < x.Fields.length; i++) {
            if (!equals(x.Fields[i], y.Fields[i]))
                return false;
        }
        return true;
    }
}
function compareUnions(x, y) {
    if (x === y) {
        return 0;
    }
    else {
        var res = compare(x.Case, y.Case);
        if (res !== 0)
            return res;
        for (var i = 0; i < x.Fields.length; i++) {
            res = compare(x.Fields[i], y.Fields[i]);
            if (res !== 0)
                return res;
        }
        return 0;
    }
}
function createDisposable(f) {
    return _a = {
            Dispose: f
        },
        _a[__WEBPACK_IMPORTED_MODULE_0__Symbol__["a" /* default */].reflection] = function () { return { interfaces: ["System.IDisposable"] }; },
        _a;
    var _a;
}
function createObj(fields) {
    var iter = fields[Symbol.iterator]();
    var cur = iter.next(), o = {};
    while (!cur.done) {
        o[cur.value[0]] = cur.value[1];
        cur = iter.next();
    }
    return o;
}
function toPlainJsObj(source) {
    if (source != null && source.constructor != Object) {
        var target = {};
        var props = Object.getOwnPropertyNames(source);
        for (var i = 0; i < props.length; i++) {
            target[props[i]] = source[props[i]];
        }
        var proto = Object.getPrototypeOf(source);
        if (proto != null) {
            props = Object.getOwnPropertyNames(proto);
            for (var i = 0; i < props.length; i++) {
                var prop = Object.getOwnPropertyDescriptor(proto, props[i]);
                if (prop.value) {
                    target[props[i]] = prop.value;
                }
                else if (prop.get) {
                    target[props[i]] = prop.get.apply(source);
                }
            }
        }
        return target;
    }
    else {
        return source;
    }
}
function round(value, digits) {
    if (digits === void 0) { digits = 0; }
    var m = Math.pow(10, digits);
    var n = +(digits ? value * m : value).toFixed(8);
    var i = Math.floor(n), f = n - i;
    var e = 1e-8;
    var r = (f > 0.5 - e && f < 0.5 + e) ? ((i % 2 == 0) ? i : i + 1) : Math.round(n);
    return digits ? r / m : r;
}
function randomNext(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
function defaultArg(arg, defaultValue, f) {
    return arg == null ? defaultValue : (f != null ? f(arg) : arg);
}


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Array__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ListClass__ = __webpack_require__(10);
/* unused harmony export Enumerator */
/* unused harmony export getEnumerator */
/* unused harmony export toIterator */
/* harmony export (immutable) */ __webpack_exports__["f"] = toList;
/* unused harmony export ofList */
/* unused harmony export ofArray */
/* unused harmony export append */
/* unused harmony export average */
/* unused harmony export averageBy */
/* unused harmony export concat */
/* unused harmony export collect */
/* unused harmony export choose */
/* harmony export (immutable) */ __webpack_exports__["g"] = compareWith;
/* unused harmony export delay */
/* unused harmony export empty */
/* unused harmony export enumerateWhile */
/* unused harmony export enumerateThenFinally */
/* unused harmony export enumerateUsing */
/* unused harmony export exactlyOne */
/* unused harmony export except */
/* unused harmony export exists */
/* unused harmony export exists2 */
/* unused harmony export filter */
/* unused harmony export where */
/* harmony export (immutable) */ __webpack_exports__["a"] = fold;
/* harmony export (immutable) */ __webpack_exports__["e"] = foldBack;
/* unused harmony export fold2 */
/* unused harmony export foldBack2 */
/* harmony export (immutable) */ __webpack_exports__["b"] = forAll;
/* unused harmony export forAll2 */
/* unused harmony export tryHead */
/* unused harmony export head */
/* unused harmony export initialize */
/* unused harmony export initializeInfinite */
/* unused harmony export tryItem */
/* unused harmony export item */
/* harmony export (immutable) */ __webpack_exports__["c"] = iterate;
/* unused harmony export iterate2 */
/* unused harmony export iterateIndexed */
/* unused harmony export iterateIndexed2 */
/* unused harmony export isEmpty */
/* unused harmony export tryLast */
/* unused harmony export last */
/* unused harmony export count */
/* harmony export (immutable) */ __webpack_exports__["d"] = map;
/* unused harmony export mapIndexed */
/* unused harmony export map2 */
/* unused harmony export mapIndexed2 */
/* unused harmony export map3 */
/* unused harmony export mapFold */
/* unused harmony export mapFoldBack */
/* unused harmony export max */
/* unused harmony export maxBy */
/* unused harmony export min */
/* unused harmony export minBy */
/* unused harmony export pairwise */
/* unused harmony export permute */
/* unused harmony export rangeStep */
/* unused harmony export rangeChar */
/* unused harmony export range */
/* unused harmony export readOnly */
/* unused harmony export reduce */
/* unused harmony export reduceBack */
/* unused harmony export replicate */
/* unused harmony export reverse */
/* unused harmony export scan */
/* unused harmony export scanBack */
/* unused harmony export singleton */
/* unused harmony export skip */
/* unused harmony export skipWhile */
/* unused harmony export sortWith */
/* unused harmony export sum */
/* unused harmony export sumBy */
/* unused harmony export tail */
/* unused harmony export take */
/* unused harmony export truncate */
/* unused harmony export takeWhile */
/* unused harmony export tryFind */
/* unused harmony export find */
/* unused harmony export tryFindBack */
/* unused harmony export findBack */
/* unused harmony export tryFindIndex */
/* unused harmony export findIndex */
/* unused harmony export tryFindIndexBack */
/* unused harmony export findIndexBack */
/* harmony export (immutable) */ __webpack_exports__["i"] = tryPick;
/* harmony export (immutable) */ __webpack_exports__["h"] = pick;
/* unused harmony export unfold */
/* unused harmony export zip */
/* unused harmony export zip3 */




var Enumerator = (function () {
    function Enumerator(iter) {
        this.iter = iter;
    }
    Enumerator.prototype.MoveNext = function () {
        var cur = this.iter.next();
        this.current = cur.value;
        return !cur.done;
    };
    Object.defineProperty(Enumerator.prototype, "Current", {
        get: function () {
            return this.current;
        },
        enumerable: true,
        configurable: true
    });
    Enumerator.prototype.Reset = function () {
        throw new Error("JS iterators cannot be reset");
    };
    Enumerator.prototype.Dispose = function () { };
    return Enumerator;
}());

function getEnumerator(o) {
    return typeof o.GetEnumerator === "function"
        ? o.GetEnumerator() : new Enumerator(o[Symbol.iterator]());
}
function toIterator(en) {
    return {
        next: function () {
            return en.MoveNext()
                ? { done: false, value: en.Current }
                : { done: true, value: null };
        }
    };
}
function __failIfNone(res) {
    if (res == null)
        throw new Error("Seq did not contain any matching element");
    return res;
}
function toList(xs) {
    return foldBack(function (x, acc) {
        return new __WEBPACK_IMPORTED_MODULE_2__ListClass__["a" /* default */](x, acc);
    }, xs, new __WEBPACK_IMPORTED_MODULE_2__ListClass__["a" /* default */]());
}
function ofList(xs) {
    return delay(function () { return unfold(function (x) { return x.tail != null ? [x.head, x.tail] : null; }, xs); });
}
function ofArray(xs) {
    return delay(function () { return unfold(function (i) { return i < xs.length ? [xs[i], i + 1] : null; }, 0); });
}
function append(xs, ys) {
    return delay(function () {
        var firstDone = false;
        var i = xs[Symbol.iterator]();
        var iters = [i, null];
        return unfold(function () {
            var cur;
            if (!firstDone) {
                cur = iters[0].next();
                if (!cur.done) {
                    return [cur.value, iters];
                }
                else {
                    firstDone = true;
                    iters = [null, ys[Symbol.iterator]()];
                }
            }
            cur = iters[1].next();
            return !cur.done ? [cur.value, iters] : null;
        }, iters);
    });
}
function average(xs) {
    var count = 1;
    var sum = reduce(function (acc, x) {
        count++;
        return acc + x;
    }, xs);
    return sum / count;
}
function averageBy(f, xs) {
    var count = 1;
    var sum = reduce(function (acc, x) {
        count++;
        return (count === 2 ? f(acc) : acc) + f(x);
    }, xs);
    return sum / count;
}
function concat(xs) {
    return delay(function () {
        var iter = xs[Symbol.iterator]();
        var output = null;
        return unfold(function (innerIter) {
            var hasFinished = false;
            while (!hasFinished) {
                if (innerIter == null) {
                    var cur = iter.next();
                    if (!cur.done) {
                        innerIter = cur.value[Symbol.iterator]();
                    }
                    else {
                        hasFinished = true;
                    }
                }
                else {
                    var cur = innerIter.next();
                    if (!cur.done) {
                        output = cur.value;
                        hasFinished = true;
                    }
                    else {
                        innerIter = null;
                    }
                }
            }
            return innerIter != null && output != null ? [output, innerIter] : null;
        }, null);
    });
}
function collect(f, xs) {
    return concat(map(f, xs));
}
function choose(f, xs) {
    var trySkipToNext = function (iter) {
        var cur = iter.next();
        if (!cur.done) {
            var y = f(cur.value);
            return y != null ? [y, iter] : trySkipToNext(iter);
        }
        return void 0;
    };
    return delay(function () {
        return unfold(function (iter) {
            return trySkipToNext(iter);
        }, xs[Symbol.iterator]());
    });
}
function compareWith(f, xs, ys) {
    var nonZero = tryFind(function (i) { return i != 0; }, map2(function (x, y) { return f(x, y); }, xs, ys));
    return nonZero != null ? nonZero : count(xs) - count(ys);
}
function delay(f) {
    return _a = {},
        _a[Symbol.iterator] = function () { return f()[Symbol.iterator](); },
        _a;
    var _a;
}
function empty() {
    return unfold(function () { return void 0; });
}
function enumerateWhile(cond, xs) {
    return concat(unfold(function () { return cond() ? [xs, true] : null; }));
}
function enumerateThenFinally(xs, finalFn) {
    return delay(function () {
        var iter;
        try {
            iter = xs[Symbol.iterator]();
        }
        catch (err) {
            return void 0;
        }
        finally {
            finalFn();
        }
        return unfold(function (iter) {
            try {
                var cur = iter.next();
                return !cur.done ? [cur.value, iter] : null;
            }
            catch (err) {
                return void 0;
            }
            finally {
                finalFn();
            }
        }, iter);
    });
}
function enumerateUsing(disp, work) {
    var isDisposed = false;
    var disposeOnce = function () {
        if (!isDisposed) {
            isDisposed = true;
            disp.Dispose();
        }
    };
    try {
        return enumerateThenFinally(work(disp), disposeOnce);
    }
    catch (err) {
        return void 0;
    }
    finally {
        disposeOnce();
    }
}
function exactlyOne(xs) {
    var iter = xs[Symbol.iterator]();
    var fst = iter.next();
    if (fst.done)
        throw new Error("Seq was empty");
    var snd = iter.next();
    if (!snd.done)
        throw new Error("Seq had multiple items");
    return fst.value;
}
function except(itemsToExclude, source) {
    var exclusionItems = Array.from(itemsToExclude);
    var testIsNotInExclusionItems = function (element) { return !exclusionItems.some(function (excludedItem) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Util__["f" /* equals */])(excludedItem, element); }); };
    return filter(testIsNotInExclusionItems, source);
}
function exists(f, xs) {
    function aux(iter) {
        var cur = iter.next();
        return !cur.done && (f(cur.value) || aux(iter));
    }
    return aux(xs[Symbol.iterator]());
}
function exists2(f, xs, ys) {
    function aux(iter1, iter2) {
        var cur1 = iter1.next(), cur2 = iter2.next();
        return !cur1.done && !cur2.done && (f(cur1.value, cur2.value) || aux(iter1, iter2));
    }
    return aux(xs[Symbol.iterator](), ys[Symbol.iterator]());
}
function filter(f, xs) {
    function trySkipToNext(iter) {
        var cur = iter.next();
        while (!cur.done) {
            if (f(cur.value)) {
                return [cur.value, iter];
            }
            cur = iter.next();
        }
        return void 0;
    }
    return delay(function () { return unfold(trySkipToNext, xs[Symbol.iterator]()); });
}
function where(f, xs) {
    return filter(f, xs);
}
function fold(f, acc, xs) {
    if (Array.isArray(xs) || ArrayBuffer.isView(xs)) {
        return xs.reduce(f, acc);
    }
    else {
        var cur = void 0;
        for (var i = 0, iter = xs[Symbol.iterator]();; i++) {
            cur = iter.next();
            if (cur.done)
                break;
            acc = f(acc, cur.value, i);
        }
        return acc;
    }
}
function foldBack(f, xs, acc) {
    var arr = Array.isArray(xs) || ArrayBuffer.isView(xs) ? xs : Array.from(xs);
    for (var i = arr.length - 1; i >= 0; i--) {
        acc = f(arr[i], acc, i);
    }
    return acc;
}
function fold2(f, acc, xs, ys) {
    var iter1 = xs[Symbol.iterator](), iter2 = ys[Symbol.iterator]();
    var cur1, cur2;
    for (var i = 0;; i++) {
        cur1 = iter1.next();
        cur2 = iter2.next();
        if (cur1.done || cur2.done) {
            break;
        }
        acc = f(acc, cur1.value, cur2.value, i);
    }
    return acc;
}
function foldBack2(f, xs, ys, acc) {
    var ar1 = Array.isArray(xs) || ArrayBuffer.isView(xs) ? xs : Array.from(xs);
    var ar2 = Array.isArray(ys) || ArrayBuffer.isView(ys) ? ys : Array.from(ys);
    for (var i = ar1.length - 1; i >= 0; i--) {
        acc = f(ar1[i], ar2[i], acc, i);
    }
    return acc;
}
function forAll(f, xs) {
    return fold(function (acc, x) { return acc && f(x); }, true, xs);
}
function forAll2(f, xs, ys) {
    return fold2(function (acc, x, y) { return acc && f(x, y); }, true, xs, ys);
}
function tryHead(xs) {
    var iter = xs[Symbol.iterator]();
    var cur = iter.next();
    return cur.done ? null : cur.value;
}
function head(xs) {
    return __failIfNone(tryHead(xs));
}
function initialize(n, f) {
    return delay(function () {
        return unfold(function (i) { return i < n ? [f(i), i + 1] : null; }, 0);
    });
}
function initializeInfinite(f) {
    return delay(function () {
        return unfold(function (i) { return [f(i), i + 1]; }, 0);
    });
}
function tryItem(i, xs) {
    if (i < 0)
        return null;
    if (Array.isArray(xs) || ArrayBuffer.isView(xs))
        return i < xs.length ? xs[i] : null;
    for (var j = 0, iter = xs[Symbol.iterator]();; j++) {
        var cur = iter.next();
        if (cur.done)
            return null;
        if (j === i)
            return cur.value;
    }
}
function item(i, xs) {
    return __failIfNone(tryItem(i, xs));
}
function iterate(f, xs) {
    fold(function (_, x) { return f(x); }, null, xs);
}
function iterate2(f, xs, ys) {
    fold2(function (_, x, y) { return f(x, y); }, null, xs, ys);
}
function iterateIndexed(f, xs) {
    fold(function (_, x, i) { return f(i, x); }, null, xs);
}
function iterateIndexed2(f, xs, ys) {
    fold2(function (_, x, y, i) { return f(i, x, y); }, null, xs, ys);
}
function isEmpty(xs) {
    var i = xs[Symbol.iterator]();
    return i.next().done;
}
function tryLast(xs) {
    try {
        return reduce(function (_, x) { return x; }, xs);
    }
    catch (err) {
        return null;
    }
}
function last(xs) {
    return __failIfNone(tryLast(xs));
}
function count(xs) {
    return Array.isArray(xs) || ArrayBuffer.isView(xs)
        ? xs.length
        : fold(function (acc, x) { return acc + 1; }, 0, xs);
}
function map(f, xs) {
    return delay(function () { return unfold(function (iter) {
        var cur = iter.next();
        return !cur.done ? [f(cur.value), iter] : null;
    }, xs[Symbol.iterator]()); });
}
function mapIndexed(f, xs) {
    return delay(function () {
        var i = 0;
        return unfold(function (iter) {
            var cur = iter.next();
            return !cur.done ? [f(i++, cur.value), iter] : null;
        }, xs[Symbol.iterator]());
    });
}
function map2(f, xs, ys) {
    return delay(function () {
        var iter1 = xs[Symbol.iterator]();
        var iter2 = ys[Symbol.iterator]();
        return unfold(function () {
            var cur1 = iter1.next(), cur2 = iter2.next();
            return !cur1.done && !cur2.done ? [f(cur1.value, cur2.value), null] : null;
        });
    });
}
function mapIndexed2(f, xs, ys) {
    return delay(function () {
        var i = 0;
        var iter1 = xs[Symbol.iterator]();
        var iter2 = ys[Symbol.iterator]();
        return unfold(function () {
            var cur1 = iter1.next(), cur2 = iter2.next();
            return !cur1.done && !cur2.done ? [f(i++, cur1.value, cur2.value), null] : null;
        });
    });
}
function map3(f, xs, ys, zs) {
    return delay(function () {
        var iter1 = xs[Symbol.iterator]();
        var iter2 = ys[Symbol.iterator]();
        var iter3 = zs[Symbol.iterator]();
        return unfold(function () {
            var cur1 = iter1.next(), cur2 = iter2.next(), cur3 = iter3.next();
            return !cur1.done && !cur2.done && !cur3.done ? [f(cur1.value, cur2.value, cur3.value), null] : null;
        });
    });
}
function mapFold(f, acc, xs) {
    var result = [];
    var r;
    var cur;
    for (var i = 0, iter = xs[Symbol.iterator]();; i++) {
        cur = iter.next();
        if (cur.done)
            break;
        _a = f(acc, cur.value), r = _a[0], acc = _a[1];
        result.push(r);
    }
    return [result, acc];
    var _a;
}
function mapFoldBack(f, xs, acc) {
    var arr = Array.isArray(xs) || ArrayBuffer.isView(xs) ? xs : Array.from(xs);
    var result = [];
    var r;
    for (var i = arr.length - 1; i >= 0; i--) {
        _a = f(arr[i], acc), r = _a[0], acc = _a[1];
        result.push(r);
    }
    return [result, acc];
    var _a;
}
function max(xs) {
    return reduce(function (acc, x) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Util__["g" /* compare */])(acc, x) === 1 ? acc : x; }, xs);
}
function maxBy(f, xs) {
    return reduce(function (acc, x) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Util__["g" /* compare */])(f(acc), f(x)) === 1 ? acc : x; }, xs);
}
function min(xs) {
    return reduce(function (acc, x) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Util__["g" /* compare */])(acc, x) === -1 ? acc : x; }, xs);
}
function minBy(f, xs) {
    return reduce(function (acc, x) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Util__["g" /* compare */])(f(acc), f(x)) === -1 ? acc : x; }, xs);
}
function pairwise(xs) {
    return skip(2, scan(function (last, next) { return [last[1], next]; }, [0, 0], xs));
}
function permute(f, xs) {
    return ofArray(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Array__["a" /* permute */])(f, Array.from(xs)));
}
function rangeStep(first, step, last) {
    if (step === 0)
        throw new Error("Step cannot be 0");
    return delay(function () { return unfold(function (x) { return step > 0 && x <= last || step < 0 && x >= last ? [x, x + step] : null; }, first); });
}
function rangeChar(first, last) {
    return delay(function () { return unfold(function (x) { return x <= last ? [x, String.fromCharCode(x.charCodeAt(0) + 1)] : null; }, first); });
}
function range(first, last) {
    return rangeStep(first, 1, last);
}
function readOnly(xs) {
    return map(function (x) { return x; }, xs);
}
function reduce(f, xs) {
    if (Array.isArray(xs) || ArrayBuffer.isView(xs))
        return xs.reduce(f);
    var iter = xs[Symbol.iterator]();
    var cur = iter.next();
    if (cur.done)
        throw new Error("Seq was empty");
    var acc = cur.value;
    for (;;) {
        cur = iter.next();
        if (cur.done)
            break;
        acc = f(acc, cur.value);
    }
    return acc;
}
function reduceBack(f, xs) {
    var ar = Array.isArray(xs) || ArrayBuffer.isView(xs) ? xs : Array.from(xs);
    if (ar.length === 0)
        throw new Error("Seq was empty");
    var acc = ar[ar.length - 1];
    for (var i = ar.length - 2; i >= 0; i--)
        acc = f(ar[i], acc, i);
    return acc;
}
function replicate(n, x) {
    return initialize(n, function () { return x; });
}
function reverse(xs) {
    var ar = Array.isArray(xs) || ArrayBuffer.isView(xs) ? xs.slice(0) : Array.from(xs);
    return ofArray(ar.reverse());
}
function scan(f, seed, xs) {
    return delay(function () {
        var iter = xs[Symbol.iterator]();
        return unfold(function (acc) {
            if (acc == null)
                return [seed, seed];
            var cur = iter.next();
            if (!cur.done) {
                acc = f(acc, cur.value);
                return [acc, acc];
            }
            return void 0;
        }, null);
    });
}
function scanBack(f, xs, seed) {
    return reverse(scan(function (acc, x) { return f(x, acc); }, seed, reverse(xs)));
}
function singleton(x) {
    return unfold(function (x) { return x != null ? [x, null] : null; }, x);
}
function skip(n, xs) {
    return _a = {},
        _a[Symbol.iterator] = function () {
            var iter = xs[Symbol.iterator]();
            for (var i = 1; i <= n; i++)
                if (iter.next().done)
                    throw new Error("Seq has not enough elements");
            return iter;
        },
        _a;
    var _a;
}
function skipWhile(f, xs) {
    return delay(function () {
        var hasPassed = false;
        return filter(function (x) { return hasPassed || (hasPassed = !f(x)); }, xs);
    });
}
function sortWith(f, xs) {
    var ys = Array.from(xs);
    return ofArray(ys.sort(f));
}
function sum(xs) {
    return fold(function (acc, x) { return acc + x; }, 0, xs);
}
function sumBy(f, xs) {
    return fold(function (acc, x) { return acc + f(x); }, 0, xs);
}
function tail(xs) {
    var iter = xs[Symbol.iterator]();
    var cur = iter.next();
    if (cur.done)
        throw new Error("Seq was empty");
    return _a = {},
        _a[Symbol.iterator] = function () { return iter; },
        _a;
    var _a;
}
function take(n, xs, truncate) {
    if (truncate === void 0) { truncate = false; }
    return delay(function () {
        var iter = xs[Symbol.iterator]();
        return unfold(function (i) {
            if (i < n) {
                var cur = iter.next();
                if (!cur.done)
                    return [cur.value, i + 1];
                if (!truncate)
                    throw new Error("Seq has not enough elements");
            }
            return void 0;
        }, 0);
    });
}
function truncate(n, xs) {
    return take(n, xs, true);
}
function takeWhile(f, xs) {
    return delay(function () {
        var iter = xs[Symbol.iterator]();
        return unfold(function (i) {
            var cur = iter.next();
            if (!cur.done && f(cur.value))
                return [cur.value, null];
            return void 0;
        }, 0);
    });
}
function tryFind(f, xs, defaultValue) {
    for (var i = 0, iter = xs[Symbol.iterator]();; i++) {
        var cur = iter.next();
        if (cur.done)
            return defaultValue === void 0 ? null : defaultValue;
        if (f(cur.value, i))
            return cur.value;
    }
}
function find(f, xs) {
    return __failIfNone(tryFind(f, xs));
}
function tryFindBack(f, xs, defaultValue) {
    var match = null;
    for (var i = 0, iter = xs[Symbol.iterator]();; i++) {
        var cur = iter.next();
        if (cur.done)
            return match === null ? (defaultValue === void 0 ? null : defaultValue) : match;
        if (f(cur.value, i))
            match = cur.value;
    }
}
function findBack(f, xs) {
    return __failIfNone(tryFindBack(f, xs));
}
function tryFindIndex(f, xs) {
    for (var i = 0, iter = xs[Symbol.iterator]();; i++) {
        var cur = iter.next();
        if (cur.done)
            return null;
        if (f(cur.value, i))
            return i;
    }
}
function findIndex(f, xs) {
    return __failIfNone(tryFindIndex(f, xs));
}
function tryFindIndexBack(f, xs) {
    var match = -1;
    for (var i = 0, iter = xs[Symbol.iterator]();; i++) {
        var cur = iter.next();
        if (cur.done)
            return match === -1 ? null : match;
        if (f(cur.value, i))
            match = i;
    }
}
function findIndexBack(f, xs) {
    return __failIfNone(tryFindIndexBack(f, xs));
}
function tryPick(f, xs) {
    for (var i = 0, iter = xs[Symbol.iterator]();; i++) {
        var cur = iter.next();
        if (cur.done)
            break;
        var y = f(cur.value, i);
        if (y != null)
            return y;
    }
    return void 0;
}
function pick(f, xs) {
    return __failIfNone(tryPick(f, xs));
}
function unfold(f, acc) {
    return _a = {},
        _a[Symbol.iterator] = function () {
            return {
                next: function () {
                    var res = f(acc);
                    if (res != null) {
                        acc = res[1];
                        return { done: false, value: res[0] };
                    }
                    return { done: true };
                }
            };
        },
        _a;
    var _a;
}
function zip(xs, ys) {
    return map2(function (x, y) { return [x, y]; }, xs, ys);
}
function zip3(xs, ys, zs) {
    return map3(function (x, y, z) { return [x, y, z]; }, xs, ys, zs);
}


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (immutable) */ __webpack_exports__["b"] = setType;
/* unused harmony export getType */
var fableGlobal = function () {
    var globalObj = typeof window !== "undefined" ? window
        : (typeof global !== "undefined" ? global
            : (typeof self !== "undefined" ? self : {}));
    if (typeof globalObj.__FABLE_CORE__ === "undefined") {
        globalObj.__FABLE_CORE__ = {
            types: new Map(),
            symbols: {
                reflection: Symbol("reflection"),
            }
        };
    }
    return globalObj.__FABLE_CORE__;
}();
function setType(fullName, cons) {
    fableGlobal.types.set(fullName, cons);
}
function getType(fullName) {
    return fableGlobal.types.get(fullName);
}
/* harmony default export */ __webpack_exports__["a"] = fableGlobal.symbols;

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(88)))

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var store      = __webpack_require__(32)('wks')
  , uid        = __webpack_require__(36)
  , Symbol     = __webpack_require__(7).Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__TimeSpan__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Long__ = __webpack_require__(38);
/* unused harmony export minValue */
/* unused harmony export maxValue */
/* unused harmony export parse */
/* unused harmony export tryParse */
/* unused harmony export create */
/* unused harmony export now */
/* unused harmony export utcNow */
/* unused harmony export today */
/* unused harmony export isLeapYear */
/* unused harmony export daysInMonth */
/* unused harmony export toUniversalTime */
/* unused harmony export toLocalTime */
/* unused harmony export timeOfDay */
/* unused harmony export date */
/* unused harmony export kind */
/* harmony export (immutable) */ __webpack_exports__["e"] = day;
/* harmony export (immutable) */ __webpack_exports__["c"] = hour;
/* unused harmony export millisecond */
/* harmony export (immutable) */ __webpack_exports__["f"] = minute;
/* harmony export (immutable) */ __webpack_exports__["d"] = month;
/* harmony export (immutable) */ __webpack_exports__["a"] = second;
/* harmony export (immutable) */ __webpack_exports__["b"] = year;
/* unused harmony export dayOfWeek */
/* unused harmony export ticks */
/* unused harmony export toBinary */
/* unused harmony export dayOfYear */
/* unused harmony export add */
/* unused harmony export addDays */
/* unused harmony export addHours */
/* unused harmony export addMinutes */
/* unused harmony export addSeconds */
/* unused harmony export addMilliseconds */
/* unused harmony export addTicks */
/* unused harmony export addYears */
/* unused harmony export addMonths */
/* unused harmony export subtract */
/* unused harmony export toLongDateString */
/* unused harmony export toShortDateString */
/* unused harmony export toLongTimeString */
/* unused harmony export toShortTimeString */
/* unused harmony export equals */
/* unused harmony export compare */
/* unused harmony export compareTo */
/* unused harmony export op_Addition */
/* unused harmony export op_Subtraction */



function minValue() {
    return parse(-8640000000000000, 1);
}
function maxValue() {
    return parse(8640000000000000, 1);
}
function parse(v, kind) {
    if (kind == null) {
        kind = typeof v == "string" && v.slice(-1) == "Z" ? 1 : 2;
    }
    var date = (v == null) ? new Date() : new Date(v);
    if (kind === 2) {
        date.kind = kind;
    }
    if (isNaN(date.getTime())) {
        throw new Error("The string is not a valid Date.");
    }
    return date;
}
function tryParse(v) {
    try {
        return [true, parse(v)];
    }
    catch (_err) {
        return [false, minValue()];
    }
}
function create(year, month, day, h, m, s, ms, kind) {
    if (h === void 0) { h = 0; }
    if (m === void 0) { m = 0; }
    if (s === void 0) { s = 0; }
    if (ms === void 0) { ms = 0; }
    if (kind === void 0) { kind = 2; }
    var date;
    if (kind === 2) {
        date = new Date(year, month - 1, day, h, m, s, ms);
        date.kind = kind;
    }
    else {
        date = new Date(Date.UTC(year, month - 1, day, h, m, s, ms));
    }
    if (isNaN(date.getTime())) {
        throw new Error("The parameters describe an unrepresentable Date.");
    }
    return date;
}
function now() {
    return parse();
}
function utcNow() {
    return parse(null, 1);
}
function today() {
    return date(now());
}
function isLeapYear(year) {
    return year % 4 == 0 && year % 100 != 0 || year % 400 == 0;
}
function daysInMonth(year, month) {
    return month == 2
        ? isLeapYear(year) ? 29 : 28
        : month >= 8 ? month % 2 == 0 ? 31 : 30 : month % 2 == 0 ? 30 : 31;
}
function toUniversalTime(d) {
    return d.kind === 2 ? new Date(d.getTime()) : d;
}
function toLocalTime(d) {
    if (d.kind === 2) {
        return d;
    }
    else {
        var d2 = new Date(d.getTime());
        d2.kind = 2;
        return d2;
    }
}
function timeOfDay(d) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__TimeSpan__["a" /* create */])(0, hour(d), minute(d), second(d), millisecond(d));
}
function date(d) {
    return create(year(d), month(d), day(d), 0, 0, 0, 0, d.kind || 1);
}
function kind(d) {
    return d.kind || 1;
}
function day(d) {
    return d.kind === 2 ? d.getDate() : d.getUTCDate();
}
function hour(d) {
    return d.kind === 2 ? d.getHours() : d.getUTCHours();
}
function millisecond(d) {
    return d.kind === 2 ? d.getMilliseconds() : d.getUTCMilliseconds();
}
function minute(d) {
    return d.kind === 2 ? d.getMinutes() : d.getUTCMinutes();
}
function month(d) {
    return (d.kind === 2 ? d.getMonth() : d.getUTCMonth()) + 1;
}
function second(d) {
    return d.kind === 2 ? d.getSeconds() : d.getUTCSeconds();
}
function year(d) {
    return d.kind === 2 ? d.getFullYear() : d.getUTCFullYear();
}
function dayOfWeek(d) {
    return d.kind === 2 ? d.getDay() : d.getUTCDay();
}
function ticks(d) {
    return __WEBPACK_IMPORTED_MODULE_2__Long__["a" /* fromNumber */](d.getTime())
        .add(62135596800000)
        .sub(d.kind == 2 ? d.getTimezoneOffset() * 60 * 1000 : 0)
        .mul(10000);
}
function toBinary(d) {
    return ticks(d);
}
function dayOfYear(d) {
    var _year = year(d);
    var _month = month(d);
    var _day = day(d);
    for (var i = 1; i < _month; i++)
        _day += daysInMonth(_year, i);
    return _day;
}
function add(d, ts) {
    return parse(d.getTime() + ts, d.kind || 1);
}
function addDays(d, v) {
    return parse(d.getTime() + v * 86400000, d.kind || 1);
}
function addHours(d, v) {
    return parse(d.getTime() + v * 3600000, d.kind || 1);
}
function addMinutes(d, v) {
    return parse(d.getTime() + v * 60000, d.kind || 1);
}
function addSeconds(d, v) {
    return parse(d.getTime() + v * 1000, d.kind || 1);
}
function addMilliseconds(d, v) {
    return parse(d.getTime() + v, d.kind || 1);
}
function addTicks(d, t) {
    return parse(__WEBPACK_IMPORTED_MODULE_2__Long__["a" /* fromNumber */](d.getTime()).add(t.div(10000)).toNumber(), d.kind || 1);
}
function addYears(d, v) {
    var newMonth = month(d);
    var newYear = year(d) + v;
    var _daysInMonth = daysInMonth(newYear, newMonth);
    var newDay = Math.min(_daysInMonth, day(d));
    return create(newYear, newMonth, newDay, hour(d), minute(d), second(d), millisecond(d), d.kind || 1);
}
function addMonths(d, v) {
    var newMonth = month(d) + v;
    var newMonth_ = 0;
    var yearOffset = 0;
    if (newMonth > 12) {
        newMonth_ = newMonth % 12;
        yearOffset = Math.floor(newMonth / 12);
        newMonth = newMonth_;
    }
    else if (newMonth < 1) {
        newMonth_ = 12 + newMonth % 12;
        yearOffset = Math.floor(newMonth / 12) + (newMonth_ == 12 ? -1 : 0);
        newMonth = newMonth_;
    }
    var newYear = year(d) + yearOffset;
    var _daysInMonth = daysInMonth(newYear, newMonth);
    var newDay = Math.min(_daysInMonth, day(d));
    return create(newYear, newMonth, newDay, hour(d), minute(d), second(d), millisecond(d), d.kind || 1);
}
function subtract(d, that) {
    return typeof that == "number"
        ? parse(d.getTime() - that, d.kind || 1)
        : d.getTime() - that.getTime();
}
function toLongDateString(d) {
    return d.toDateString();
}
function toShortDateString(d) {
    return d.toLocaleDateString();
}
function toLongTimeString(d) {
    return d.toLocaleTimeString();
}
function toShortTimeString(d) {
    return d.toLocaleTimeString().replace(/:\d\d(?!:)/, "");
}
function equals(d1, d2) {
    return d1.getTime() == d2.getTime();
}
function compare(x, y) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Util__["g" /* compare */])(x, y);
}
function compareTo(x, y) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Util__["g" /* compare */])(x, y);
}
function op_Addition(x, y) {
    return add(x, y);
}
function op_Subtraction(x, y) {
    return subtract(x, y);
}


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ListClass__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Seq__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Map__ = __webpack_require__(78);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__ListClass__["b"]; });
/* harmony export (immutable) */ __webpack_exports__["b"] = append;
/* unused harmony export choose */
/* harmony export (immutable) */ __webpack_exports__["f"] = collect;
/* unused harmony export concat */
/* harmony export (immutable) */ __webpack_exports__["e"] = filter;
/* unused harmony export where */
/* unused harmony export initialize */
/* harmony export (immutable) */ __webpack_exports__["d"] = map;
/* unused harmony export mapIndexed */
/* unused harmony export partition */
/* unused harmony export replicate */
/* unused harmony export reverse */
/* unused harmony export singleton */
/* unused harmony export slice */
/* unused harmony export unzip */
/* unused harmony export unzip3 */
/* unused harmony export groupBy */






/* harmony default export */ __webpack_exports__["a"] = __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */];

function append(xs, ys) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Seq__["a" /* fold */])(function (acc, x) { return new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](x, acc); }, ys, reverse(xs));
}
function choose(f, xs) {
    var r = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Seq__["a" /* fold */])(function (acc, x) {
        var y = f(x);
        return y != null ? new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](y, acc) : acc;
    }, new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](), xs);
    return reverse(r);
}
function collect(f, xs) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Seq__["a" /* fold */])(function (acc, x) { return append(acc, f(x)); }, new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](), xs);
}
function concat(xs) {
    return collect(function (x) { return x; }, xs);
}
function filter(f, xs) {
    return reverse(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Seq__["a" /* fold */])(function (acc, x) { return f(x) ? new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](x, acc) : acc; }, new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](), xs));
}
function where(f, xs) {
    return filter(f, xs);
}
function initialize(n, f) {
    if (n < 0) {
        throw new Error("List length must be non-negative");
    }
    var xs = new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */]();
    for (var i = 1; i <= n; i++) {
        xs = new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](f(n - i), xs);
    }
    return xs;
}
function map(f, xs) {
    return reverse(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Seq__["a" /* fold */])(function (acc, x) { return new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](f(x), acc); }, new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](), xs));
}
function mapIndexed(f, xs) {
    return reverse(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Seq__["a" /* fold */])(function (acc, x, i) { return new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](f(i, x), acc); }, new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](), xs));
}
function partition(f, xs) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Seq__["a" /* fold */])(function (acc, x) {
        var lacc = acc[0], racc = acc[1];
        return f(x) ? [new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](x, lacc), racc] : [lacc, new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](x, racc)];
    }, [new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](), new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */]()], reverse(xs));
}
function replicate(n, x) {
    return initialize(n, function () { return x; });
}
function reverse(xs) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Seq__["a" /* fold */])(function (acc, x) { return new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](x, acc); }, new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](), xs);
}
function singleton(x) {
    return new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](x, new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */]());
}
function slice(lower, upper, xs) {
    var noLower = (lower == null);
    var noUpper = (upper == null);
    return reverse(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Seq__["a" /* fold */])(function (acc, x, i) { return (noLower || lower <= i) && (noUpper || i <= upper) ? new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](x, acc) : acc; }, new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](), xs));
}
function unzip(xs) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Seq__["e" /* foldBack */])(function (xy, acc) {
        return [new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](xy[0], acc[0]), new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](xy[1], acc[1])];
    }, xs, [new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](), new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */]()]);
}
function unzip3(xs) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Seq__["e" /* foldBack */])(function (xyz, acc) {
        return [new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](xyz[0], acc[0]), new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](xyz[1], acc[1]), new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](xyz[2], acc[2])];
    }, xs, [new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](), new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](), new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */]()]);
}
function groupBy(f, xs) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Seq__["f" /* toList */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Seq__["d" /* map */])(function (k) { return [k[0], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Seq__["f" /* toList */])(k[1])]; }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__Map__["a" /* groupBy */])(f, xs)));
}


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(30)(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 7 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var anObject       = __webpack_require__(11)
  , IE8_DOM_DEFINE = __webpack_require__(54)
  , toPrimitive    = __webpack_require__(70)
  , dP             = Object.defineProperty;

exports.f = __webpack_require__(6) ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Trampoline; });
/* harmony export (immutable) */ __webpack_exports__["b"] = protectedCont;
/* harmony export (immutable) */ __webpack_exports__["c"] = protectedBind;
/* harmony export (immutable) */ __webpack_exports__["d"] = protectedReturn;
/* unused harmony export AsyncBuilder */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return singleton; });
var Trampoline = (function () {
    function Trampoline() {
        this.callCount = 0;
    }
    Object.defineProperty(Trampoline, "maxTrampolineCallCount", {
        get: function () {
            return 2000;
        },
        enumerable: true,
        configurable: true
    });
    Trampoline.prototype.incrementAndCheck = function () {
        return this.callCount++ > Trampoline.maxTrampolineCallCount;
    };
    Trampoline.prototype.hijack = function (f) {
        this.callCount = 0;
        setTimeout(f, 0);
    };
    return Trampoline;
}());

function protectedCont(f) {
    return function (ctx) {
        if (ctx.cancelToken.isCancelled)
            ctx.onCancel("cancelled");
        else if (ctx.trampoline.incrementAndCheck())
            ctx.trampoline.hijack(function () {
                try {
                    f(ctx);
                }
                catch (err) {
                    ctx.onError(err);
                }
            });
        else
            try {
                f(ctx);
            }
            catch (err) {
                ctx.onError(err);
            }
    };
}
function protectedBind(computation, binder) {
    return protectedCont(function (ctx) {
        computation({
            onSuccess: function (x) {
                try {
                    binder(x)(ctx);
                }
                catch (ex) {
                    ctx.onError(ex);
                }
            },
            onError: ctx.onError,
            onCancel: ctx.onCancel,
            cancelToken: ctx.cancelToken,
            trampoline: ctx.trampoline
        });
    });
}
function protectedReturn(value) {
    return protectedCont(function (ctx) { return ctx.onSuccess(value); });
}
var AsyncBuilder = (function () {
    function AsyncBuilder() {
    }
    AsyncBuilder.prototype.Bind = function (computation, binder) {
        return protectedBind(computation, binder);
    };
    AsyncBuilder.prototype.Combine = function (computation1, computation2) {
        return this.Bind(computation1, function () { return computation2; });
    };
    AsyncBuilder.prototype.Delay = function (generator) {
        return protectedCont(function (ctx) { return generator()(ctx); });
    };
    AsyncBuilder.prototype.For = function (sequence, body) {
        var iter = sequence[Symbol.iterator]();
        var cur = iter.next();
        return this.While(function () { return !cur.done; }, this.Delay(function () {
            var res = body(cur.value);
            cur = iter.next();
            return res;
        }));
    };
    AsyncBuilder.prototype.Return = function (value) {
        return protectedReturn(value);
    };
    AsyncBuilder.prototype.ReturnFrom = function (computation) {
        return computation;
    };
    AsyncBuilder.prototype.TryFinally = function (computation, compensation) {
        return protectedCont(function (ctx) {
            computation({
                onSuccess: function (x) {
                    compensation();
                    ctx.onSuccess(x);
                },
                onError: function (x) {
                    compensation();
                    ctx.onError(x);
                },
                onCancel: function (x) {
                    compensation();
                    ctx.onCancel(x);
                },
                cancelToken: ctx.cancelToken,
                trampoline: ctx.trampoline
            });
        });
    };
    AsyncBuilder.prototype.TryWith = function (computation, catchHandler) {
        return protectedCont(function (ctx) {
            computation({
                onSuccess: ctx.onSuccess,
                onCancel: ctx.onCancel,
                cancelToken: ctx.cancelToken,
                trampoline: ctx.trampoline,
                onError: function (ex) {
                    try {
                        catchHandler(ex)(ctx);
                    }
                    catch (ex2) {
                        ctx.onError(ex2);
                    }
                }
            });
        });
    };
    AsyncBuilder.prototype.Using = function (resource, binder) {
        return this.TryFinally(binder(resource), function () { return resource.Dispose(); });
    };
    AsyncBuilder.prototype.While = function (guard, computation) {
        var _this = this;
        if (guard())
            return this.Bind(computation, function () { return _this.While(guard, computation); });
        else
            return this.Return(void 0);
    };
    AsyncBuilder.prototype.Zero = function () {
        return protectedCont(function (ctx) { return ctx.onSuccess(void 0); });
    };
    return AsyncBuilder;
}());

var singleton = new AsyncBuilder();


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Symbol__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Util__ = __webpack_require__(0);
/* harmony export (immutable) */ __webpack_exports__["b"] = ofArray;




function ofArray(args, base) {
    var acc = base || new List();
    for (var i = args.length - 1; i >= 0; i--) {
        acc = new List(args[i], acc);
    }
    return acc;
}
var List = (function () {
    function List(head, tail) {
        this.head = head;
        this.tail = tail;
    }
    List.prototype.ToString = function () {
        return "[" + Array.from(this).map(__WEBPACK_IMPORTED_MODULE_1__Util__["h" /* toString */]).join("; ") + "]";
    };
    List.prototype.Equals = function (x) {
        if (this === x) {
            return true;
        }
        else {
            var iter1 = this[Symbol.iterator](), iter2 = x[Symbol.iterator]();
            for (;;) {
                var cur1 = iter1.next(), cur2 = iter2.next();
                if (cur1.done)
                    return cur2.done ? true : false;
                else if (cur2.done)
                    return false;
                else if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Util__["f" /* equals */])(cur1.value, cur2.value))
                    return false;
            }
        }
    };
    List.prototype.CompareTo = function (x) {
        if (this === x) {
            return 0;
        }
        else {
            var acc = 0;
            var iter1 = this[Symbol.iterator](), iter2 = x[Symbol.iterator]();
            for (;;) {
                var cur1 = iter1.next(), cur2 = iter2.next();
                if (cur1.done)
                    return cur2.done ? acc : -1;
                else if (cur2.done)
                    return 1;
                else {
                    acc = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Util__["g" /* compare */])(cur1.value, cur2.value);
                    if (acc != 0)
                        return acc;
                }
            }
        }
    };
    Object.defineProperty(List.prototype, "length", {
        get: function () {
            var cur = this, acc = 0;
            while (cur.tail != null) {
                cur = cur.tail;
                acc++;
            }
            return acc;
        },
        enumerable: true,
        configurable: true
    });
    List.prototype[Symbol.iterator] = function () {
        var cur = this;
        return {
            next: function () {
                var tmp = cur;
                cur = cur.tail;
                return { done: tmp.tail == null, value: tmp.head };
            }
        };
    };
    List.prototype[__WEBPACK_IMPORTED_MODULE_0__Symbol__["a" /* default */].reflection] = function () {
        return {
            type: "Microsoft.FSharp.Collections.FSharpList",
            interfaces: ["System.IEquatable", "System.IComparable"]
        };
    };
    return List;
}());
/* harmony default export */ __webpack_exports__["a"] = List;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(18);
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 13 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var dP         = __webpack_require__(8)
  , createDesc = __webpack_require__(20);
module.exports = __webpack_require__(6) ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AsyncBuilder__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Choice__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Seq__ = __webpack_require__(1);
/* unused harmony export awaitPromise */
/* unused harmony export cancellationToken */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return defaultCancellationToken; });
/* harmony export (immutable) */ __webpack_exports__["a"] = catchAsync;
/* harmony export (immutable) */ __webpack_exports__["d"] = fromContinuations;
/* unused harmony export ignore */
/* unused harmony export parallel */
/* unused harmony export sleep */
/* unused harmony export start */
/* harmony export (immutable) */ __webpack_exports__["b"] = startImmediate;
/* unused harmony export startWithContinuations */
/* unused harmony export startAsPromise */







var Async = (function () {
    function Async() {
    }
    return Async;
}());
/* unused harmony default export */ var _unused_webpack_default_export = Async;
function emptyContinuation(x) {
}
function awaitPromise(p) {
    return fromContinuations(function (conts) {
        return p.then(conts[0]).catch(function (err) {
            return (err == "cancelled" ? conts[2] : conts[1])(err);
        });
    });
}
function cancellationToken() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__AsyncBuilder__["b" /* protectedCont */])(function (ctx) { return ctx.onSuccess(ctx.cancelToken); });
}
var defaultCancellationToken = { isCancelled: false };
function catchAsync(work) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__AsyncBuilder__["b" /* protectedCont */])(function (ctx) {
        work({
            onSuccess: function (x) { return ctx.onSuccess(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Choice__["a" /* choice1Of2 */])(x)); },
            onError: function (ex) { return ctx.onSuccess(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Choice__["b" /* choice2Of2 */])(ex)); },
            onCancel: ctx.onCancel,
            cancelToken: ctx.cancelToken,
            trampoline: ctx.trampoline
        });
    });
}
function fromContinuations(f) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__AsyncBuilder__["b" /* protectedCont */])(function (ctx) { return f([ctx.onSuccess, ctx.onError, ctx.onCancel]); });
}
function ignore(computation) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__AsyncBuilder__["c" /* protectedBind */])(computation, function (x) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__AsyncBuilder__["d" /* protectedReturn */])(void 0); });
}
function parallel(computations) {
    return awaitPromise(Promise.all(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__Seq__["d" /* map */])(function (w) { return startAsPromise(w); }, computations)));
}
function sleep(millisecondsDueTime) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__AsyncBuilder__["b" /* protectedCont */])(function (ctx) {
        setTimeout(function () { return ctx.cancelToken.isCancelled ? ctx.onCancel("cancelled") : ctx.onSuccess(void 0); }, millisecondsDueTime);
    });
}
function start(computation, cancellationToken) {
    return startWithContinuations(computation, cancellationToken);
}
function startImmediate(computation, cancellationToken) {
    return start(computation, cancellationToken);
}
function startWithContinuations(computation, continuation, exceptionContinuation, cancellationContinuation, cancelToken) {
    if (typeof continuation !== "function") {
        cancelToken = continuation;
        continuation = null;
    }
    var trampoline = new __WEBPACK_IMPORTED_MODULE_0__AsyncBuilder__["e" /* Trampoline */]();
    computation({
        onSuccess: continuation ? continuation : emptyContinuation,
        onError: exceptionContinuation ? exceptionContinuation : emptyContinuation,
        onCancel: cancellationContinuation ? cancellationContinuation : emptyContinuation,
        cancelToken: cancelToken ? cancelToken : defaultCancellationToken,
        trampoline: trampoline
    });
}
function startAsPromise(computation, cancellationToken) {
    return new Promise(function (resolve, reject) {
        return startWithContinuations(computation, resolve, reject, reject, cancellationToken ? cancellationToken : defaultCancellationToken);
    });
}


/***/ }),
/* 16 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(7)
  , core      = __webpack_require__(12)
  , ctx       = __webpack_require__(27)
  , hide      = __webpack_require__(14)
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE]
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(a, b, c){
        if(this instanceof C){
          switch(arguments.length){
            case 0: return new C;
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if(IS_PROTO){
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library` 
module.exports = $export;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = {};

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(32)('keys')
  , uid    = __webpack_require__(36);
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};

/***/ }),
/* 22 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(48), __esModule: true };

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_fable_core_List__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_fable_core_Async__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_fable_core_AsyncBuilder__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_fable_core_Symbol__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_fable_core_MailboxProcessor__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_fable_core_Seq__ = __webpack_require__(1);
/* unused harmony export CmdModule */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Program; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgramModule; });










var CmdModule = function (__exports) {
    var none = __exports.none = function () {
        return new __WEBPACK_IMPORTED_MODULE_2_fable_core_List__["a" /* default */]();
    };

    var ofMsg = __exports.ofMsg = function (msg) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_fable_core_List__["c" /* ofArray */])([function (dispatch) {
            dispatch(msg);
        }]);
    };

    var map = __exports.map = function (f, cmd) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_fable_core_List__["d" /* map */])(function (g) {
            return function ($var2) {
                return g(function (post) {
                    return function ($var1) {
                        return post(f($var1));
                    };
                }($var2));
            };
        }, cmd);
    };

    var batch = __exports.batch = function (cmds) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_fable_core_List__["f" /* collect */])(function (x) {
            return x;
        }, cmds);
    };

    var ofAsync = __exports.ofAsync = function (task, arg, ofSuccess, ofError) {
        var bind = function bind(dispatch) {
            return function (builder_) {
                return builder_.Delay(function () {
                    return builder_.Bind(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_fable_core_Async__["a" /* catchAsync */])(task(arg)), function (_arg1) {
                        dispatch(_arg1.Case === "Choice2Of2" ? ofError(_arg1.Fields[0]) : ofSuccess(_arg1.Fields[0]));
                        return builder_.Zero();
                    });
                });
            }(__WEBPACK_IMPORTED_MODULE_4_fable_core_AsyncBuilder__["a" /* singleton */]);
        };

        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_fable_core_List__["c" /* ofArray */])([function ($var3) {
            return function (arg00) {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_fable_core_Async__["b" /* startImmediate */])(arg00);
            }(bind($var3));
        }]);
    };

    var ofFunc = __exports.ofFunc = function (task, arg, ofSuccess, ofError) {
        var bind = function bind(dispatch) {
            try {
                (function ($var4) {
                    return dispatch(ofSuccess($var4));
                })(task(arg));
            } catch (x) {
                (function ($var5) {
                    return dispatch(ofError($var5));
                })(x);
            }
        };

        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_fable_core_List__["c" /* ofArray */])([bind]);
    };

    var ofSub = __exports.ofSub = function (sub) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_fable_core_List__["c" /* ofArray */])([sub]);
    };

    var ofPromise = __exports.ofPromise = function (task, arg, ofSuccess, ofError) {
        var bind = function bind(dispatch) {
            task(arg).then(function ($var7) {
                return dispatch(ofSuccess($var7));
            }).catch(function ($var6) {
                return dispatch(ofError($var6));
            });
        };

        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_fable_core_List__["c" /* ofArray */])([bind]);
    };

    return __exports;
}({});
var Program = function () {
    function Program(init, update, subscribe, view, setState, onError) {
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Program);

        this.init = init;
        this.update = update;
        this.subscribe = subscribe;
        this.view = view;
        this.setState = setState;
        this.onError = onError;
    }

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(Program, [{
        key: __WEBPACK_IMPORTED_MODULE_5_fable_core_Symbol__["a" /* default */].reflection,
        value: function () {
            return {
                type: "Elmish.Program",
                interfaces: ["FSharpRecord"],
                properties: {
                    init: "function",
                    update: "function",
                    subscribe: "function",
                    view: "function",
                    setState: "function",
                    onError: "function"
                }
            };
        }
    }]);

    return Program;
}();
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_fable_core_Symbol__["b" /* setType */])("Elmish.Program", Program);
var ProgramModule = function (__exports) {
    var onError = __exports.onError = function (text, ex) {
        console.error(text, ex);
    };

    var mkProgram = __exports.mkProgram = function (init, update, view) {
        var setState = function setState(model) {
            return function ($var8) {
                return function (value) {
                    value;
                }(view(model)($var8));
            };
        };

        return new Program(init, update, function (_arg1) {
            return CmdModule.none();
        }, view, setState, function (tupledArg) {
            onError(tupledArg[0], tupledArg[1]);
        });
    };

    var mkSimple = __exports.mkSimple = function (init, update, view) {
        var init_1 = function init_1($var9) {
            return function (state) {
                return [state, CmdModule.none()];
            }(init($var9));
        };

        var update_1 = function update_1(msg) {
            return function ($var10) {
                return function (state) {
                    return [state, CmdModule.none()];
                }(update(msg)($var10));
            };
        };

        var setState = function setState(model) {
            return function ($var11) {
                return function (value) {
                    value;
                }(view(model)($var11));
            };
        };

        return new Program(init_1, update_1, function (_arg1) {
            return CmdModule.none();
        }, view, setState, function (tupledArg) {
            onError(tupledArg[0], tupledArg[1]);
        });
    };

    var withSubscription = __exports.withSubscription = function (subscribe, program) {
        return new Program(program.init, program.update, subscribe, program.view, program.setState, program.onError);
    };

    var withConsoleTrace = __exports.withConsoleTrace = function (program) {
        var trace = function trace(text) {
            return function (msg) {
                return function (model) {
                    console.log(text, model, msg);
                    return program.update(msg)(model);
                };
            };
        };

        var update = trace("Updating:");
        return new Program(program.init, update, program.subscribe, program.view, program.setState, program.onError);
    };

    var withTrace = __exports.withTrace = function (program, trace) {
        var update = function update(msg) {
            return function (model) {
                trace(msg)(model);
                return program.update(msg)(model);
            };
        };

        return new Program(program.init, update, program.subscribe, program.view, program.setState, program.onError);
    };

    var runWith = __exports.runWith = function (arg, program) {
        var patternInput = program.init(arg);
        var inbox = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_fable_core_MailboxProcessor__["a" /* start */])(function (mb) {
            var loop = function loop(state) {
                return function (builder_) {
                    return builder_.Delay(function () {
                        return builder_.Bind(mb.receive(), function (_arg1) {
                            return builder_.TryWith(builder_.Delay(function () {
                                var patternInput_1 = program.update(_arg1)(state);
                                program.setState(patternInput_1[0])(function (arg00) {
                                    mb.post(arg00);
                                });
                                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_fable_core_Seq__["c" /* iterate */])(function (sub) {
                                    sub(function (arg00) {
                                        mb.post(arg00);
                                    });
                                }, patternInput_1[1]);
                                return builder_.ReturnFrom(loop(patternInput_1[0]));
                            }), function (_arg2) {
                                program.onError(["Unable to process a message:", _arg2]);
                                return builder_.ReturnFrom(loop(state));
                            });
                        });
                    });
                }(__WEBPACK_IMPORTED_MODULE_4_fable_core_AsyncBuilder__["a" /* singleton */]);
            };

            return loop(patternInput[0]);
        });
        program.setState(patternInput[0])(function (arg00) {
            inbox.post(arg00);
        });
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_fable_core_Seq__["c" /* iterate */])(function (sub) {
            sub(function (arg00) {
                inbox.post(arg00);
            });
        }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_fable_core_List__["b" /* append */])(program.subscribe(patternInput[0]), patternInput[1]));
    };

    var run = __exports.run = function (program) {
        runWith(null, program);
    };

    return __exports;
}({});
//# sourceMappingURL=elmish.js.map

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var vnode_1 = __webpack_require__(41);
var is = __webpack_require__(40);
var htmldomapi_1 = __webpack_require__(81);
function isUndef(s) { return s === undefined; }
function isDef(s) { return s !== undefined; }
var emptyNode = vnode_1.default('', {}, [], undefined, undefined);
function sameVnode(vnode1, vnode2) {
    return vnode1.key === vnode2.key && vnode1.sel === vnode2.sel;
}
function isVnode(vnode) {
    return vnode.sel !== undefined;
}
function createKeyToOldIdx(children, beginIdx, endIdx) {
    var i, map = {}, key, ch;
    for (i = beginIdx; i <= endIdx; ++i) {
        ch = children[i];
        if (ch != null) {
            key = ch.key;
            if (key !== undefined)
                map[key] = i;
        }
    }
    return map;
}
var hooks = ['create', 'update', 'remove', 'destroy', 'pre', 'post'];
var h_1 = __webpack_require__(39);
exports.h = h_1.h;
var thunk_1 = __webpack_require__(87);
exports.thunk = thunk_1.thunk;
function init(modules, domApi) {
    var i, j, cbs = {};
    var api = domApi !== undefined ? domApi : htmldomapi_1.default;
    for (i = 0; i < hooks.length; ++i) {
        cbs[hooks[i]] = [];
        for (j = 0; j < modules.length; ++j) {
            var hook = modules[j][hooks[i]];
            if (hook !== undefined) {
                cbs[hooks[i]].push(hook);
            }
        }
    }
    function emptyNodeAt(elm) {
        var id = elm.id ? '#' + elm.id : '';
        var c = elm.className ? '.' + elm.className.split(' ').join('.') : '';
        return vnode_1.default(api.tagName(elm).toLowerCase() + id + c, {}, [], undefined, elm);
    }
    function createRmCb(childElm, listeners) {
        return function rmCb() {
            if (--listeners === 0) {
                var parent_1 = api.parentNode(childElm);
                api.removeChild(parent_1, childElm);
            }
        };
    }
    function createElm(vnode, insertedVnodeQueue) {
        var i, data = vnode.data;
        if (data !== undefined) {
            if (isDef(i = data.hook) && isDef(i = i.init)) {
                i(vnode);
                data = vnode.data;
            }
        }
        var children = vnode.children, sel = vnode.sel;
        if (sel === '!') {
            if (isUndef(vnode.text)) {
                vnode.text = '';
            }
            vnode.elm = api.createComment(vnode.text);
        }
        else if (sel !== undefined) {
            // Parse selector
            var hashIdx = sel.indexOf('#');
            var dotIdx = sel.indexOf('.', hashIdx);
            var hash = hashIdx > 0 ? hashIdx : sel.length;
            var dot = dotIdx > 0 ? dotIdx : sel.length;
            var tag = hashIdx !== -1 || dotIdx !== -1 ? sel.slice(0, Math.min(hash, dot)) : sel;
            var elm = vnode.elm = isDef(data) && isDef(i = data.ns) ? api.createElementNS(i, tag)
                : api.createElement(tag);
            if (hash < dot)
                elm.id = sel.slice(hash + 1, dot);
            if (dotIdx > 0)
                elm.className = sel.slice(dot + 1).replace(/\./g, ' ');
            for (i = 0; i < cbs.create.length; ++i)
                cbs.create[i](emptyNode, vnode);
            if (is.array(children)) {
                for (i = 0; i < children.length; ++i) {
                    var ch = children[i];
                    if (ch != null) {
                        api.appendChild(elm, createElm(ch, insertedVnodeQueue));
                    }
                }
            }
            else if (is.primitive(vnode.text)) {
                api.appendChild(elm, api.createTextNode(vnode.text));
            }
            i = vnode.data.hook; // Reuse variable
            if (isDef(i)) {
                if (i.create)
                    i.create(emptyNode, vnode);
                if (i.insert)
                    insertedVnodeQueue.push(vnode);
            }
        }
        else {
            vnode.elm = api.createTextNode(vnode.text);
        }
        return vnode.elm;
    }
    function addVnodes(parentElm, before, vnodes, startIdx, endIdx, insertedVnodeQueue) {
        for (; startIdx <= endIdx; ++startIdx) {
            var ch = vnodes[startIdx];
            if (ch != null) {
                api.insertBefore(parentElm, createElm(ch, insertedVnodeQueue), before);
            }
        }
    }
    function invokeDestroyHook(vnode) {
        var i, j, data = vnode.data;
        if (data !== undefined) {
            if (isDef(i = data.hook) && isDef(i = i.destroy))
                i(vnode);
            for (i = 0; i < cbs.destroy.length; ++i)
                cbs.destroy[i](vnode);
            if (vnode.children !== undefined) {
                for (j = 0; j < vnode.children.length; ++j) {
                    i = vnode.children[j];
                    if (i != null && typeof i !== "string") {
                        invokeDestroyHook(i);
                    }
                }
            }
        }
    }
    function removeVnodes(parentElm, vnodes, startIdx, endIdx) {
        for (; startIdx <= endIdx; ++startIdx) {
            var i_1 = void 0, listeners = void 0, rm = void 0, ch = vnodes[startIdx];
            if (ch != null) {
                if (isDef(ch.sel)) {
                    invokeDestroyHook(ch);
                    listeners = cbs.remove.length + 1;
                    rm = createRmCb(ch.elm, listeners);
                    for (i_1 = 0; i_1 < cbs.remove.length; ++i_1)
                        cbs.remove[i_1](ch, rm);
                    if (isDef(i_1 = ch.data) && isDef(i_1 = i_1.hook) && isDef(i_1 = i_1.remove)) {
                        i_1(ch, rm);
                    }
                    else {
                        rm();
                    }
                }
                else {
                    api.removeChild(parentElm, ch.elm);
                }
            }
        }
    }
    function updateChildren(parentElm, oldCh, newCh, insertedVnodeQueue) {
        var oldStartIdx = 0, newStartIdx = 0;
        var oldEndIdx = oldCh.length - 1;
        var oldStartVnode = oldCh[0];
        var oldEndVnode = oldCh[oldEndIdx];
        var newEndIdx = newCh.length - 1;
        var newStartVnode = newCh[0];
        var newEndVnode = newCh[newEndIdx];
        var oldKeyToIdx;
        var idxInOld;
        var elmToMove;
        var before;
        while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
            if (oldStartVnode == null) {
                oldStartVnode = oldCh[++oldStartIdx]; // Vnode might have been moved left
            }
            else if (oldEndVnode == null) {
                oldEndVnode = oldCh[--oldEndIdx];
            }
            else if (newStartVnode == null) {
                newStartVnode = newCh[++newStartIdx];
            }
            else if (newEndVnode == null) {
                newEndVnode = newCh[--newEndIdx];
            }
            else if (sameVnode(oldStartVnode, newStartVnode)) {
                patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
                oldStartVnode = oldCh[++oldStartIdx];
                newStartVnode = newCh[++newStartIdx];
            }
            else if (sameVnode(oldEndVnode, newEndVnode)) {
                patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
                oldEndVnode = oldCh[--oldEndIdx];
                newEndVnode = newCh[--newEndIdx];
            }
            else if (sameVnode(oldStartVnode, newEndVnode)) {
                patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
                api.insertBefore(parentElm, oldStartVnode.elm, api.nextSibling(oldEndVnode.elm));
                oldStartVnode = oldCh[++oldStartIdx];
                newEndVnode = newCh[--newEndIdx];
            }
            else if (sameVnode(oldEndVnode, newStartVnode)) {
                patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
                api.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
                oldEndVnode = oldCh[--oldEndIdx];
                newStartVnode = newCh[++newStartIdx];
            }
            else {
                if (oldKeyToIdx === undefined) {
                    oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
                }
                idxInOld = oldKeyToIdx[newStartVnode.key];
                if (isUndef(idxInOld)) {
                    api.insertBefore(parentElm, createElm(newStartVnode, insertedVnodeQueue), oldStartVnode.elm);
                    newStartVnode = newCh[++newStartIdx];
                }
                else {
                    elmToMove = oldCh[idxInOld];
                    if (elmToMove.sel !== newStartVnode.sel) {
                        api.insertBefore(parentElm, createElm(newStartVnode, insertedVnodeQueue), oldStartVnode.elm);
                    }
                    else {
                        patchVnode(elmToMove, newStartVnode, insertedVnodeQueue);
                        oldCh[idxInOld] = undefined;
                        api.insertBefore(parentElm, elmToMove.elm, oldStartVnode.elm);
                    }
                    newStartVnode = newCh[++newStartIdx];
                }
            }
        }
        if (oldStartIdx > oldEndIdx) {
            before = newCh[newEndIdx + 1] == null ? null : newCh[newEndIdx + 1].elm;
            addVnodes(parentElm, before, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
        }
        else if (newStartIdx > newEndIdx) {
            removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
        }
    }
    function patchVnode(oldVnode, vnode, insertedVnodeQueue) {
        var i, hook;
        if (isDef(i = vnode.data) && isDef(hook = i.hook) && isDef(i = hook.prepatch)) {
            i(oldVnode, vnode);
        }
        var elm = vnode.elm = oldVnode.elm;
        var oldCh = oldVnode.children;
        var ch = vnode.children;
        if (oldVnode === vnode)
            return;
        if (vnode.data !== undefined) {
            for (i = 0; i < cbs.update.length; ++i)
                cbs.update[i](oldVnode, vnode);
            i = vnode.data.hook;
            if (isDef(i) && isDef(i = i.update))
                i(oldVnode, vnode);
        }
        if (isUndef(vnode.text)) {
            if (isDef(oldCh) && isDef(ch)) {
                if (oldCh !== ch)
                    updateChildren(elm, oldCh, ch, insertedVnodeQueue);
            }
            else if (isDef(ch)) {
                if (isDef(oldVnode.text))
                    api.setTextContent(elm, '');
                addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
            }
            else if (isDef(oldCh)) {
                removeVnodes(elm, oldCh, 0, oldCh.length - 1);
            }
            else if (isDef(oldVnode.text)) {
                api.setTextContent(elm, '');
            }
        }
        else if (oldVnode.text !== vnode.text) {
            api.setTextContent(elm, vnode.text);
        }
        if (isDef(hook) && isDef(i = hook.postpatch)) {
            i(oldVnode, vnode);
        }
    }
    return function patch(oldVnode, vnode) {
        var i, elm, parent;
        var insertedVnodeQueue = [];
        for (i = 0; i < cbs.pre.length; ++i)
            cbs.pre[i]();
        if (!isVnode(oldVnode)) {
            oldVnode = emptyNodeAt(oldVnode);
        }
        if (sameVnode(oldVnode, vnode)) {
            patchVnode(oldVnode, vnode, insertedVnodeQueue);
        }
        else {
            elm = oldVnode.elm;
            parent = api.parentNode(elm);
            createElm(vnode, insertedVnodeQueue);
            if (parent !== null) {
                api.insertBefore(parent, vnode.elm, api.nextSibling(elm));
                removeVnodes(parent, [oldVnode], 0, 0);
            }
        }
        for (i = 0; i < insertedVnodeQueue.length; ++i) {
            insertedVnodeQueue[i].data.hook.insert(insertedVnodeQueue[i]);
        }
        for (i = 0; i < cbs.post.length; ++i)
            cbs.post[i]();
        return vnode;
    };
}
exports.init = init;
//# sourceMappingURL=snabbdom.js.map

/***/ }),
/* 26 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(49);
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(18)
  , document = __webpack_require__(7).document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};

/***/ }),
/* 29 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(8).f
  , has = __webpack_require__(13)
  , TAG = __webpack_require__(3)('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(7)
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(55)
  , defined = __webpack_require__(16);
module.exports = function(it){
  return IObject(defined(it));
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(22)
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(16);
module.exports = function(it){
  return Object(defined(it));
};

/***/ }),
/* 36 */
/***/ (function(module, exports) {

var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Symbol__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Util__ = __webpack_require__(0);
/* harmony export (immutable) */ __webpack_exports__["a"] = choice1Of2;
/* harmony export (immutable) */ __webpack_exports__["b"] = choice2Of2;



function choice1Of2(v) {
    return new Choice("Choice1Of2", [v]);
}
function choice2Of2(v) {
    return new Choice("Choice2Of2", [v]);
}
var Choice = (function () {
    function Choice(t, d) {
        this.Case = t;
        this.Fields = d;
    }
    Object.defineProperty(Choice.prototype, "valueIfChoice1", {
        get: function () {
            return this.Case === "Choice1Of2" ? this.Fields[0] : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Choice.prototype, "valueIfChoice2", {
        get: function () {
            return this.Case === "Choice2Of2" ? this.Fields[0] : null;
        },
        enumerable: true,
        configurable: true
    });
    Choice.prototype.Equals = function (other) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Util__["d" /* equalsUnions */])(this, other);
    };
    Choice.prototype.CompareTo = function (other) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Util__["e" /* compareUnions */])(this, other);
    };
    Choice.prototype[__WEBPACK_IMPORTED_MODULE_0__Symbol__["a" /* default */].reflection] = function () {
        return {
            type: "Microsoft.FSharp.Core.FSharpChoice",
            interfaces: ["FSharpUnion", "System.IEquatable", "System.IComparable"]
        };
    };
    return Choice;
}());
/* unused harmony default export */ var _unused_webpack_default_export = Choice;


/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Symbol__ = __webpack_require__(2);
/* unused harmony export Long */
/* unused harmony export isLong */
/* unused harmony export fromInt */
/* harmony export (immutable) */ __webpack_exports__["a"] = fromNumber;
/* unused harmony export fromBits */
/* unused harmony export fromString */
/* unused harmony export fromValue */
/* unused harmony export ZERO */
/* unused harmony export UZERO */
/* unused harmony export ONE */
/* unused harmony export UONE */
/* unused harmony export NEG_ONE */
/* unused harmony export MAX_VALUE */
/* unused harmony export MAX_UNSIGNED_VALUE */
/* unused harmony export MIN_VALUE */

var Long = (function () {
    function Long(low, high, unsigned) {
        this.eq = this.equals;
        this.neq = this.notEquals;
        this.lt = this.lessThan;
        this.lte = this.lessThanOrEqual;
        this.gt = this.greaterThan;
        this.gte = this.greaterThanOrEqual;
        this.comp = this.compare;
        this.neg = this.negate;
        this.abs = this.absolute;
        this.sub = this.subtract;
        this.mul = this.multiply;
        this.div = this.divide;
        this.mod = this.modulo;
        this.shl = this.shiftLeft;
        this.shr = this.shiftRight;
        this.shru = this.shiftRightUnsigned;
        this.Equals = this.equals;
        this.CompareTo = this.compare;
        this.ToString = this.toString;
        this.low = low | 0;
        this.high = high | 0;
        this.unsigned = !!unsigned;
    }
    Long.prototype.toInt = function () {
        return this.unsigned ? this.low >>> 0 : this.low;
    };
    Long.prototype.toNumber = function () {
        if (this.unsigned)
            return ((this.high >>> 0) * TWO_PWR_32_DBL) + (this.low >>> 0);
        return this.high * TWO_PWR_32_DBL + (this.low >>> 0);
    };
    Long.prototype.toString = function (radix) {
        if (radix === void 0) { radix = 10; }
        radix = radix || 10;
        if (radix < 2 || 36 < radix)
            throw RangeError('radix');
        if (this.isZero())
            return '0';
        if (this.isNegative()) {
            if (this.eq(MIN_VALUE)) {
                var radixLong = fromNumber(radix), div = this.div(radixLong), rem1 = div.mul(radixLong).sub(this);
                return div.toString(radix) + rem1.toInt().toString(radix);
            }
            else
                return '-' + this.neg().toString(radix);
        }
        var radixToPower = fromNumber(pow_dbl(radix, 6), this.unsigned), rem = this;
        var result = '';
        while (true) {
            var remDiv = rem.div(radixToPower), intval = rem.sub(remDiv.mul(radixToPower)).toInt() >>> 0, digits = intval.toString(radix);
            rem = remDiv;
            if (rem.isZero())
                return digits + result;
            else {
                while (digits.length < 6)
                    digits = '0' + digits;
                result = '' + digits + result;
            }
        }
    };
    Long.prototype.getHighBits = function () {
        return this.high;
    };
    Long.prototype.getHighBitsUnsigned = function () {
        return this.high >>> 0;
    };
    Long.prototype.getLowBits = function () {
        return this.low;
    };
    Long.prototype.getLowBitsUnsigned = function () {
        return this.low >>> 0;
    };
    Long.prototype.getNumBitsAbs = function () {
        if (this.isNegative())
            return this.eq(MIN_VALUE) ? 64 : this.neg().getNumBitsAbs();
        var val = this.high != 0 ? this.high : this.low;
        for (var bit = 31; bit > 0; bit--)
            if ((val & (1 << bit)) != 0)
                break;
        return this.high != 0 ? bit + 33 : bit + 1;
    };
    Long.prototype.isZero = function () {
        return this.high === 0 && this.low === 0;
    };
    Long.prototype.isNegative = function () {
        return !this.unsigned && this.high < 0;
    };
    Long.prototype.isPositive = function () {
        return this.unsigned || this.high >= 0;
    };
    Long.prototype.isOdd = function () {
        return (this.low & 1) === 1;
    };
    Long.prototype.isEven = function () {
        return (this.low & 1) === 0;
    };
    Long.prototype.equals = function (other) {
        if (!isLong(other))
            other = fromValue(other);
        if (this.unsigned !== other.unsigned && (this.high >>> 31) === 1 && (other.high >>> 31) === 1)
            return false;
        return this.high === other.high && this.low === other.low;
    };
    Long.prototype.notEquals = function (other) {
        return !this.eq(other);
    };
    Long.prototype.lessThan = function (other) {
        return this.comp(other) < 0;
    };
    Long.prototype.lessThanOrEqual = function (other) {
        return this.comp(other) <= 0;
    };
    Long.prototype.greaterThan = function (other) {
        return this.comp(other) > 0;
    };
    Long.prototype.greaterThanOrEqual = function (other) {
        return this.comp(other) >= 0;
    };
    Long.prototype.compare = function (other) {
        if (!isLong(other))
            other = fromValue(other);
        if (this.eq(other))
            return 0;
        var thisNeg = this.isNegative(), otherNeg = other.isNegative();
        if (thisNeg && !otherNeg)
            return -1;
        if (!thisNeg && otherNeg)
            return 1;
        if (!this.unsigned)
            return this.sub(other).isNegative() ? -1 : 1;
        return (other.high >>> 0) > (this.high >>> 0) || (other.high === this.high && (other.low >>> 0) > (this.low >>> 0)) ? -1 : 1;
    };
    Long.prototype.negate = function () {
        if (!this.unsigned && this.eq(MIN_VALUE))
            return MIN_VALUE;
        return this.not().add(ONE);
    };
    Long.prototype.absolute = function () {
        if (!this.unsigned && this.isNegative())
            return this.negate();
        else
            return this;
    };
    Long.prototype.add = function (addend) {
        if (!isLong(addend))
            addend = fromValue(addend);
        var a48 = this.high >>> 16;
        var a32 = this.high & 0xFFFF;
        var a16 = this.low >>> 16;
        var a00 = this.low & 0xFFFF;
        var b48 = addend.high >>> 16;
        var b32 = addend.high & 0xFFFF;
        var b16 = addend.low >>> 16;
        var b00 = addend.low & 0xFFFF;
        var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
        c00 += a00 + b00;
        c16 += c00 >>> 16;
        c00 &= 0xFFFF;
        c16 += a16 + b16;
        c32 += c16 >>> 16;
        c16 &= 0xFFFF;
        c32 += a32 + b32;
        c48 += c32 >>> 16;
        c32 &= 0xFFFF;
        c48 += a48 + b48;
        c48 &= 0xFFFF;
        return fromBits((c16 << 16) | c00, (c48 << 16) | c32, this.unsigned);
    };
    Long.prototype.subtract = function (subtrahend) {
        if (!isLong(subtrahend))
            subtrahend = fromValue(subtrahend);
        return this.add(subtrahend.neg());
    };
    Long.prototype.multiply = function (multiplier) {
        if (this.isZero())
            return ZERO;
        if (!isLong(multiplier))
            multiplier = fromValue(multiplier);
        if (multiplier.isZero())
            return ZERO;
        if (this.eq(MIN_VALUE))
            return multiplier.isOdd() ? MIN_VALUE : ZERO;
        if (multiplier.eq(MIN_VALUE))
            return this.isOdd() ? MIN_VALUE : ZERO;
        if (this.isNegative()) {
            if (multiplier.isNegative())
                return this.neg().mul(multiplier.neg());
            else
                return this.neg().mul(multiplier).neg();
        }
        else if (multiplier.isNegative())
            return this.mul(multiplier.neg()).neg();
        if (this.lt(TWO_PWR_24) && multiplier.lt(TWO_PWR_24))
            return fromNumber(this.toNumber() * multiplier.toNumber(), this.unsigned);
        var a48 = this.high >>> 16;
        var a32 = this.high & 0xFFFF;
        var a16 = this.low >>> 16;
        var a00 = this.low & 0xFFFF;
        var b48 = multiplier.high >>> 16;
        var b32 = multiplier.high & 0xFFFF;
        var b16 = multiplier.low >>> 16;
        var b00 = multiplier.low & 0xFFFF;
        var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
        c00 += a00 * b00;
        c16 += c00 >>> 16;
        c00 &= 0xFFFF;
        c16 += a16 * b00;
        c32 += c16 >>> 16;
        c16 &= 0xFFFF;
        c16 += a00 * b16;
        c32 += c16 >>> 16;
        c16 &= 0xFFFF;
        c32 += a32 * b00;
        c48 += c32 >>> 16;
        c32 &= 0xFFFF;
        c32 += a16 * b16;
        c48 += c32 >>> 16;
        c32 &= 0xFFFF;
        c32 += a00 * b32;
        c48 += c32 >>> 16;
        c32 &= 0xFFFF;
        c48 += a48 * b00 + a32 * b16 + a16 * b32 + a00 * b48;
        c48 &= 0xFFFF;
        return fromBits((c16 << 16) | c00, (c48 << 16) | c32, this.unsigned);
    };
    Long.prototype.divide = function (divisor) {
        if (!isLong(divisor))
            divisor = fromValue(divisor);
        if (divisor.isZero())
            throw Error('division by zero');
        if (this.isZero())
            return this.unsigned ? UZERO : ZERO;
        var approx = 0, rem = ZERO, res = ZERO;
        if (!this.unsigned) {
            if (this.eq(MIN_VALUE)) {
                if (divisor.eq(ONE) || divisor.eq(NEG_ONE))
                    return MIN_VALUE;
                else if (divisor.eq(MIN_VALUE))
                    return ONE;
                else {
                    var halfThis = this.shr(1);
                    var approx_1 = halfThis.div(divisor).shl(1);
                    if (approx_1.eq(ZERO)) {
                        return divisor.isNegative() ? ONE : NEG_ONE;
                    }
                    else {
                        rem = this.sub(divisor.mul(approx_1));
                        res = approx_1.add(rem.div(divisor));
                        return res;
                    }
                }
            }
            else if (divisor.eq(MIN_VALUE))
                return this.unsigned ? UZERO : ZERO;
            if (this.isNegative()) {
                if (divisor.isNegative())
                    return this.neg().div(divisor.neg());
                return this.neg().div(divisor).neg();
            }
            else if (divisor.isNegative())
                return this.div(divisor.neg()).neg();
            res = ZERO;
        }
        else {
            if (!divisor.unsigned)
                divisor = divisor.toUnsigned();
            if (divisor.gt(this))
                return UZERO;
            if (divisor.gt(this.shru(1)))
                return UONE;
            res = UZERO;
        }
        rem = this;
        while (rem.gte(divisor)) {
            approx = Math.max(1, Math.floor(rem.toNumber() / divisor.toNumber()));
            var log2 = Math.ceil(Math.log(approx) / Math.LN2), delta = (log2 <= 48) ? 1 : pow_dbl(2, log2 - 48), approxRes = fromNumber(approx), approxRem = approxRes.mul(divisor);
            while (approxRem.isNegative() || approxRem.gt(rem)) {
                approx -= delta;
                approxRes = fromNumber(approx, this.unsigned);
                approxRem = approxRes.mul(divisor);
            }
            if (approxRes.isZero())
                approxRes = ONE;
            res = res.add(approxRes);
            rem = rem.sub(approxRem);
        }
        return res;
    };
    Long.prototype.modulo = function (divisor) {
        if (!isLong(divisor))
            divisor = fromValue(divisor);
        return this.sub(this.div(divisor).mul(divisor));
    };
    ;
    Long.prototype.not = function () {
        return fromBits(~this.low, ~this.high, this.unsigned);
    };
    ;
    Long.prototype.and = function (other) {
        if (!isLong(other))
            other = fromValue(other);
        return fromBits(this.low & other.low, this.high & other.high, this.unsigned);
    };
    Long.prototype.or = function (other) {
        if (!isLong(other))
            other = fromValue(other);
        return fromBits(this.low | other.low, this.high | other.high, this.unsigned);
    };
    Long.prototype.xor = function (other) {
        if (!isLong(other))
            other = fromValue(other);
        return fromBits(this.low ^ other.low, this.high ^ other.high, this.unsigned);
    };
    Long.prototype.shiftLeft = function (numBits) {
        if (isLong(numBits))
            numBits = numBits.toInt();
        numBits = numBits & 63;
        if (numBits === 0)
            return this;
        else if (numBits < 32)
            return fromBits(this.low << numBits, (this.high << numBits) | (this.low >>> (32 - numBits)), this.unsigned);
        else
            return fromBits(0, this.low << (numBits - 32), this.unsigned);
    };
    Long.prototype.shiftRight = function (numBits) {
        if (isLong(numBits))
            numBits = numBits.toInt();
        numBits = numBits & 63;
        if (numBits === 0)
            return this;
        else if (numBits < 32)
            return fromBits((this.low >>> numBits) | (this.high << (32 - numBits)), this.high >> numBits, this.unsigned);
        else
            return fromBits(this.high >> (numBits - 32), this.high >= 0 ? 0 : -1, this.unsigned);
    };
    Long.prototype.shiftRightUnsigned = function (numBits) {
        if (isLong(numBits))
            numBits = numBits.toInt();
        numBits = numBits & 63;
        if (numBits === 0)
            return this;
        else {
            var high = this.high;
            if (numBits < 32) {
                var low = this.low;
                return fromBits((low >>> numBits) | (high << (32 - numBits)), high >>> numBits, this.unsigned);
            }
            else if (numBits === 32)
                return fromBits(high, 0, this.unsigned);
            else
                return fromBits(high >>> (numBits - 32), 0, this.unsigned);
        }
    };
    Long.prototype.toSigned = function () {
        if (!this.unsigned)
            return this;
        return fromBits(this.low, this.high, false);
    };
    Long.prototype.toUnsigned = function () {
        if (this.unsigned)
            return this;
        return fromBits(this.low, this.high, true);
    };
    Long.prototype.toBytes = function (le) {
        return le ? this.toBytesLE() : this.toBytesBE();
    };
    Long.prototype.toBytesLE = function () {
        var hi = this.high, lo = this.low;
        return [
            lo & 0xff,
            (lo >>> 8) & 0xff,
            (lo >>> 16) & 0xff,
            (lo >>> 24) & 0xff,
            hi & 0xff,
            (hi >>> 8) & 0xff,
            (hi >>> 16) & 0xff,
            (hi >>> 24) & 0xff
        ];
    };
    Long.prototype.toBytesBE = function () {
        var hi = this.high, lo = this.low;
        return [
            (hi >>> 24) & 0xff,
            (hi >>> 16) & 0xff,
            (hi >>> 8) & 0xff,
            hi & 0xff,
            (lo >>> 24) & 0xff,
            (lo >>> 16) & 0xff,
            (lo >>> 8) & 0xff,
            lo & 0xff
        ];
    };
    Long.prototype[__WEBPACK_IMPORTED_MODULE_0__Symbol__["a" /* default */].reflection] = function () {
        return {
            type: "System.Int64",
            interfaces: ["FSharpRecord", "System.IComparable"],
            properties: {
                low: "number",
                high: "number",
                unsigned: "boolean"
            }
        };
    };
    return Long;
}());

var INT_CACHE = {};
var UINT_CACHE = {};
function isLong(obj) {
    return (obj && obj instanceof Long);
}
function fromInt(value, unsigned) {
    if (unsigned === void 0) { unsigned = false; }
    var obj, cachedObj, cache;
    if (unsigned) {
        value >>>= 0;
        if (cache = (0 <= value && value < 256)) {
            cachedObj = UINT_CACHE[value];
            if (cachedObj)
                return cachedObj;
        }
        obj = fromBits(value, (value | 0) < 0 ? -1 : 0, true);
        if (cache)
            UINT_CACHE[value] = obj;
        return obj;
    }
    else {
        value |= 0;
        if (cache = (-128 <= value && value < 128)) {
            cachedObj = INT_CACHE[value];
            if (cachedObj)
                return cachedObj;
        }
        obj = fromBits(value, value < 0 ? -1 : 0, false);
        if (cache)
            INT_CACHE[value] = obj;
        return obj;
    }
}
function fromNumber(value, unsigned) {
    if (unsigned === void 0) { unsigned = false; }
    if (isNaN(value) || !isFinite(value))
        return unsigned ? UZERO : ZERO;
    if (unsigned) {
        if (value < 0)
            return UZERO;
        if (value >= TWO_PWR_64_DBL)
            return MAX_UNSIGNED_VALUE;
    }
    else {
        if (value <= -TWO_PWR_63_DBL)
            return MIN_VALUE;
        if (value + 1 >= TWO_PWR_63_DBL)
            return MAX_VALUE;
    }
    if (value < 0)
        return fromNumber(-value, unsigned).neg();
    return fromBits((value % TWO_PWR_32_DBL) | 0, (value / TWO_PWR_32_DBL) | 0, unsigned);
}
function fromBits(lowBits, highBits, unsigned) {
    return new Long(lowBits, highBits, unsigned);
}
var pow_dbl = Math.pow;
function fromString(str, unsigned, radix) {
    if (unsigned === void 0) { unsigned = false; }
    if (radix === void 0) { radix = 10; }
    if (str.length === 0)
        throw Error('empty string');
    if (str === "NaN" || str === "Infinity" || str === "+Infinity" || str === "-Infinity")
        return ZERO;
    if (typeof unsigned === 'number') {
        radix = unsigned,
            unsigned = false;
    }
    else {
        unsigned = !!unsigned;
    }
    radix = radix || 10;
    if (radix < 2 || 36 < radix)
        throw RangeError('radix');
    var p = str.indexOf('-');
    if (p > 0)
        throw Error('interior hyphen');
    else if (p === 0) {
        return fromString(str.substring(1), unsigned, radix).neg();
    }
    var radixToPower = fromNumber(pow_dbl(radix, 8));
    var result = ZERO;
    for (var i = 0; i < str.length; i += 8) {
        var size = Math.min(8, str.length - i), value = parseInt(str.substring(i, i + size), radix);
        if (size < 8) {
            var power = fromNumber(pow_dbl(radix, size));
            result = result.mul(power).add(fromNumber(value));
        }
        else {
            result = result.mul(radixToPower);
            result = result.add(fromNumber(value));
        }
    }
    result.unsigned = unsigned;
    return result;
}
function fromValue(val) {
    if (val instanceof Long)
        return val;
    if (typeof val === 'number')
        return fromNumber(val);
    if (typeof val === 'string')
        return fromString(val);
    return fromBits(val.low, val.high, val.unsigned);
}
var TWO_PWR_16_DBL = 1 << 16;
var TWO_PWR_24_DBL = 1 << 24;
var TWO_PWR_32_DBL = TWO_PWR_16_DBL * TWO_PWR_16_DBL;
var TWO_PWR_64_DBL = TWO_PWR_32_DBL * TWO_PWR_32_DBL;
var TWO_PWR_63_DBL = TWO_PWR_64_DBL / 2;
var TWO_PWR_24 = fromInt(TWO_PWR_24_DBL);
var ZERO = fromInt(0);
var UZERO = fromInt(0, true);
var ONE = fromInt(1);
var UONE = fromInt(1, true);
var NEG_ONE = fromInt(-1);
var MAX_VALUE = fromBits(0xFFFFFFFF | 0, 0x7FFFFFFF | 0, false);
var MAX_UNSIGNED_VALUE = fromBits(0xFFFFFFFF | 0, 0xFFFFFFFF | 0, true);
var MIN_VALUE = fromBits(0, 0x80000000 | 0, false);


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var vnode_1 = __webpack_require__(41);
var is = __webpack_require__(40);
function addNS(data, children, sel) {
    data.ns = 'http://www.w3.org/2000/svg';
    if (sel !== 'foreignObject' && children !== undefined) {
        for (var i = 0; i < children.length; ++i) {
            var childData = children[i].data;
            if (childData !== undefined) {
                addNS(childData, children[i].children, children[i].sel);
            }
        }
    }
}
function h(sel, b, c) {
    var data = {}, children, text, i;
    if (c !== undefined) {
        data = b;
        if (is.array(c)) {
            children = c;
        }
        else if (is.primitive(c)) {
            text = c;
        }
        else if (c && c.sel) {
            children = [c];
        }
    }
    else if (b !== undefined) {
        if (is.array(b)) {
            children = b;
        }
        else if (is.primitive(b)) {
            text = b;
        }
        else if (b && b.sel) {
            children = [b];
        }
        else {
            data = b;
        }
    }
    if (is.array(children)) {
        for (i = 0; i < children.length; ++i) {
            if (is.primitive(children[i]))
                children[i] = vnode_1.vnode(undefined, undefined, undefined, children[i]);
        }
    }
    if (sel[0] === 's' && sel[1] === 'v' && sel[2] === 'g' &&
        (sel.length === 3 || sel[3] === '.' || sel[3] === '#')) {
        addNS(data, children, sel);
    }
    return vnode_1.vnode(sel, data, children, text, undefined);
}
exports.h = h;
;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = h;
//# sourceMappingURL=h.js.map

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.array = Array.isArray;
function primitive(s) {
    return typeof s === 'string' || typeof s === 'number';
}
exports.primitive = primitive;
//# sourceMappingURL=is.js.map

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function vnode(sel, data, children, text, elm) {
    var key = data === undefined ? undefined : data.key;
    return { sel: sel, data: data, children: children,
        text: text, elm: elm, key: key };
}
exports.vnode = vnode;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = vnode;
//# sourceMappingURL=vnode.js.map

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(47), __esModule: true };

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__RegExp__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Date__ = __webpack_require__(4);
/* unused harmony export compare */
/* unused harmony export compareTo */
/* unused harmony export indexOfAny */
/* unused harmony export fsFormat */
/* unused harmony export format */
/* unused harmony export endsWith */
/* unused harmony export initialize */
/* unused harmony export insert */
/* harmony export (immutable) */ __webpack_exports__["a"] = isNullOrEmpty;
/* unused harmony export isNullOrWhiteSpace */
/* unused harmony export join */
/* unused harmony export newGuid */
/* unused harmony export padLeft */
/* unused harmony export padRight */
/* unused harmony export remove */
/* unused harmony export replace */
/* unused harmony export replicate */
/* unused harmony export split */
/* unused harmony export trim */









var fsFormatRegExp = /(^|[^%])%([0+ ]*)(-?\d+)?(?:\.(\d+))?(\w)/;
var formatRegExp = /\{(\d+)(,-?\d+)?(?:\:(.+?))?\}/g;
var StringComparison = {
    CurrentCulture: 0,
    CurrentCultureIgnoreCase: 1,
    InvariantCulture: 2,
    InvariantCultureIgnoreCase: 3,
    Ordinal: 4,
    OrdinalIgnoreCase: 5,
};
function cmp(x, y, ic) {
    function isIgnoreCase(i) {
        return i === true ||
            i === StringComparison.CurrentCultureIgnoreCase ||
            i === StringComparison.InvariantCultureIgnoreCase ||
            i === StringComparison.OrdinalIgnoreCase;
    }
    function isOrdinal(i) {
        return i === StringComparison.Ordinal ||
            i === StringComparison.OrdinalIgnoreCase;
    }
    if (x == null)
        return y == null ? 0 : -1;
    if (y == null)
        return 1;
    if (isOrdinal(ic)) {
        if (isIgnoreCase(ic)) {
            x = x.toLowerCase();
            y = y.toLowerCase();
        }
        return (x === y) ? 0 : (x < y ? -1 : 1);
    }
    else {
        if (isIgnoreCase(ic)) {
            x = x.toLocaleLowerCase();
            y = y.toLocaleLowerCase();
        }
        return x.localeCompare(y);
    }
}
function compare() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    switch (args.length) {
        case 2: return cmp(args[0], args[1], false);
        case 3: return cmp(args[0], args[1], args[2]);
        case 4: return cmp(args[0], args[1], args[2] === true);
        case 5: return cmp(args[0].substr(args[1], args[4]), args[2].substr(args[3], args[4]), false);
        case 6: return cmp(args[0].substr(args[1], args[4]), args[2].substr(args[3], args[4]), args[5]);
        case 7: return cmp(args[0].substr(args[1], args[4]), args[2].substr(args[3], args[4]), args[5] === true);
        default: throw new Error("String.compare: Unsupported number of parameters");
    }
}
function compareTo(x, y) {
    return cmp(x, y, false);
}
function indexOfAny(str, anyOf) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    if (str == null || str === "")
        return -1;
    var startIndex = (args.length > 0) ? args[0] : 0;
    if (startIndex < 0)
        throw new Error("String.indexOfAny: Start index cannot be negative");
    var length = (args.length > 1) ? args[1] : str.length - startIndex;
    if (length < 0)
        throw new Error("String.indexOfAny: Length cannot be negative");
    if (length > str.length - startIndex)
        throw new Error("String.indexOfAny: Invalid startIndex and length");
    str = str.substr(startIndex, length);
    for (var _a = 0, anyOf_1 = anyOf; _a < anyOf_1.length; _a++) {
        var c = anyOf_1[_a];
        var index = str.indexOf(c);
        if (index > -1)
            return index + startIndex;
    }
    return -1;
}
function toHex(value) {
    return value < 0
        ? "ff" + (16777215 - (Math.abs(value) - 1)).toString(16)
        : value.toString(16);
}
function fsFormat(str) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    var _cont;
    function isObject(x) {
        return x !== null && typeof x === "object" && !(x instanceof Number) && !(x instanceof String) && !(x instanceof Boolean);
    }
    function formatOnce(str, rep) {
        return str.replace(fsFormatRegExp, function (_, prefix, flags, pad, precision, format) {
            switch (format) {
                case "f":
                case "F":
                    rep = rep.toFixed(precision || 6);
                    break;
                case "g":
                case "G":
                    rep = rep.toPrecision(precision);
                    break;
                case "e":
                case "E":
                    rep = rep.toExponential(precision);
                    break;
                case "O":
                    rep = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Util__["h" /* toString */])(rep);
                    break;
                case "A":
                    try {
                        rep = JSON.stringify(rep, function (k, v) {
                            return v && v[Symbol.iterator] && !Array.isArray(v) && isObject(v) ? Array.from(v)
                                : v && typeof v.ToString === "function" ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Util__["h" /* toString */])(v) : v;
                        });
                    }
                    catch (err) {
                        rep = "{" + Object.getOwnPropertyNames(rep).map(function (k) { return k + ": " + String(rep[k]); }).join(", ") + "}";
                    }
                    break;
                case "x":
                    rep = toHex(Number(rep));
                    break;
                case "X":
                    rep = toHex(Number(rep)).toUpperCase();
                    break;
            }
            var plusPrefix = flags.indexOf("+") >= 0 && parseInt(rep) >= 0;
            if (!isNaN(pad = parseInt(pad))) {
                var ch = pad >= 0 && flags.indexOf("0") >= 0 ? "0" : " ";
                rep = padLeft(rep, Math.abs(pad) - (plusPrefix ? 1 : 0), ch, pad < 0);
            }
            var once = prefix + (plusPrefix ? "+" + rep : rep);
            return once.replace(/%/g, "%%");
        });
    }
    function makeFn(str) {
        return function (rep) {
            var str2 = formatOnce(str, rep);
            return fsFormatRegExp.test(str2)
                ? makeFn(str2) : _cont(str2.replace(/%%/g, "%"));
        };
    }
    if (args.length === 0) {
        return function (cont) {
            _cont = cont;
            return fsFormatRegExp.test(str) ? makeFn(str) : _cont(str);
        };
    }
    else {
        for (var i = 0; i < args.length; i++) {
            str = formatOnce(str, args[i]);
        }
        return str.replace(/%%/g, "%");
    }
}
function format(str) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return str.replace(formatRegExp, function (match, idx, pad, format) {
        var rep = args[idx], padSymbol = " ";
        if (typeof rep === "number") {
            switch ((format || "").substring(0, 1)) {
                case "f":
                case "F":
                    rep = format.length > 1 ? rep.toFixed(format.substring(1)) : rep.toFixed(2);
                    break;
                case "g":
                case "G":
                    rep = format.length > 1 ? rep.toPrecision(format.substring(1)) : rep.toPrecision();
                    break;
                case "e":
                case "E":
                    rep = format.length > 1 ? rep.toExponential(format.substring(1)) : rep.toExponential();
                    break;
                case "p":
                case "P":
                    rep = (format.length > 1 ? (rep * 100).toFixed(format.substring(1)) : (rep * 100).toFixed(2)) + " %";
                    break;
                case "x":
                    rep = toHex(Number(rep));
                    break;
                case "X":
                    rep = toHex(Number(rep)).toUpperCase();
                    break;
                default:
                    var m = /^(0+)(\.0+)?$/.exec(format);
                    if (m != null) {
                        var decs = 0;
                        if (m[2] != null)
                            rep = rep.toFixed(decs = m[2].length - 1);
                        pad = "," + (m[1].length + (decs ? decs + 1 : 0)).toString();
                        padSymbol = "0";
                    }
                    else if (format) {
                        rep = format;
                    }
            }
        }
        else if (rep instanceof Date) {
            if (format.length === 1) {
                switch (format) {
                    case "D":
                        rep = rep.toDateString();
                        break;
                    case "T":
                        rep = rep.toLocaleTimeString();
                        break;
                    case "d":
                        rep = rep.toLocaleDateString();
                        break;
                    case "t":
                        rep = rep.toLocaleTimeString().replace(/:\d\d(?!:)/, "");
                        break;
                    case "o":
                    case "O":
                        if (rep.kind === 2) {
                            var offset = rep.getTimezoneOffset() * -1;
                            rep = format("{0:yyyy-MM-dd}T{0:HH:mm}:{1:00.000}{2}{3:00}:{4:00}", rep, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__Date__["a" /* second */])(rep), offset >= 0 ? "+" : "-", ~~(offset / 60), offset % 60);
                        }
                        else {
                            rep = rep.toISOString();
                        }
                }
            }
            else {
                rep = format.replace(/\w+/g, function (match2) {
                    var rep2 = match2;
                    switch (match2.substring(0, 1)) {
                        case "y":
                            rep2 = match2.length < 4 ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__Date__["b" /* year */])(rep) % 100 : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__Date__["b" /* year */])(rep);
                            break;
                        case "h":
                            rep2 = rep.getHours() > 12 ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__Date__["c" /* hour */])(rep) % 12 : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__Date__["c" /* hour */])(rep);
                            break;
                        case "M":
                            rep2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__Date__["d" /* month */])(rep);
                            break;
                        case "d":
                            rep2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__Date__["e" /* day */])(rep);
                            break;
                        case "H":
                            rep2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__Date__["c" /* hour */])(rep);
                            break;
                        case "m":
                            rep2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__Date__["f" /* minute */])(rep);
                            break;
                        case "s":
                            rep2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__Date__["a" /* second */])(rep);
                            break;
                    }
                    if (rep2 !== match2 && rep2 < 10 && match2.length > 1) {
                        rep2 = "0" + rep2;
                    }
                    return rep2;
                });
            }
        }
        if (!isNaN(pad = parseInt((pad || "").substring(1)))) {
            rep = padLeft(rep, Math.abs(pad), padSymbol, pad < 0);
        }
        return rep;
    });
}
function endsWith(str, search) {
    var idx = str.lastIndexOf(search);
    return idx >= 0 && idx == str.length - search.length;
}
function initialize(n, f) {
    if (n < 0)
        throw new Error("String length must be non-negative");
    var xs = new Array(n);
    for (var i = 0; i < n; i++)
        xs[i] = f(i);
    return xs.join("");
}
function insert(str, startIndex, value) {
    if (startIndex < 0 || startIndex > str.length) {
        throw new Error("startIndex is negative or greater than the length of this instance.");
    }
    return str.substring(0, startIndex) + value + str.substring(startIndex);
}
function isNullOrEmpty(str) {
    return typeof str !== "string" || str.length == 0;
}
function isNullOrWhiteSpace(str) {
    return typeof str !== "string" || /^\s*$/.test(str);
}
function join(delimiter, xs) {
    xs = typeof xs == "string" ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Util__["i" /* getRestParams */])(arguments, 1) : xs;
    return (Array.isArray(xs) ? xs : Array.from(xs)).join(delimiter);
}
function newGuid() {
    var uuid = "";
    for (var i = 0; i < 32; i++) {
        var random = Math.random() * 16 | 0;
        if (i === 8 || i === 12 || i === 16 || i === 20)
            uuid += "-";
        uuid += (i === 12 ? 4 : i === 16 ? random & 3 | 8 : random).toString(16);
    }
    return uuid;
}
function padLeft(str, len, ch, isRight) {
    ch = ch || " ";
    str = String(str);
    len = len - str.length;
    for (var i = -1; ++i < len;)
        str = isRight ? str + ch : ch + str;
    return str;
}
function padRight(str, len, ch) {
    return padLeft(str, len, ch, true);
}
function remove(str, startIndex, count) {
    if (startIndex >= str.length) {
        throw new Error("startIndex must be less than length of string");
    }
    if (typeof count === "number" && (startIndex + count) > str.length) {
        throw new Error("Index and count must refer to a location within the string.");
    }
    return str.slice(0, startIndex) + (typeof count === "number" ? str.substr(startIndex + count) : "");
}
function replace(str, search, replace) {
    return str.replace(new RegExp(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__RegExp__["a" /* escape */])(search), "g"), replace);
}
function replicate(n, x) {
    return initialize(n, function () { return x; });
}
function split(str, splitters, count, removeEmpty) {
    count = typeof count == "number" ? count : null;
    removeEmpty = typeof removeEmpty == "number" ? removeEmpty : null;
    if (count < 0)
        throw new Error("Count cannot be less than zero");
    if (count === 0)
        return [];
    splitters = Array.isArray(splitters) ? splitters : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Util__["i" /* getRestParams */])(arguments, 1);
    splitters = splitters.map(function (x) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__RegExp__["a" /* escape */])(x); });
    splitters = splitters.length > 0 ? splitters : [" "];
    var m;
    var i = 0;
    var splits = [];
    var reg = new RegExp(splitters.join("|"), "g");
    while ((count == null || count > 1) && (m = reg.exec(str)) !== null) {
        if (!removeEmpty || (m.index - i) > 0) {
            count = count != null ? count - 1 : count;
            splits.push(str.substring(i, m.index));
        }
        i = reg.lastIndex;
    }
    if (!removeEmpty || (str.length - i) > 0)
        splits.push(str.substring(i));
    return splits;
}
function trim(str, side) {
    var chars = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        chars[_i - 2] = arguments[_i];
    }
    if (side == "both" && chars.length == 0)
        return str.trim();
    if (side == "start" || side == "both") {
        var reg = chars.length == 0 ? /^\s+/ : new RegExp("^[" + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__RegExp__["a" /* escape */])(chars.join("")) + "]+");
        str = str.replace(reg, "");
    }
    if (side == "end" || side == "both") {
        var reg = chars.length == 0 ? /\s+$/ : new RegExp("[" + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__RegExp__["a" /* escape */])(chars.join("")) + "]+$");
        str = str.replace(reg, "");
    }
    return str;
}


/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_snabbdom_snabbdom__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_snabbdom_snabbdom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_snabbdom_snabbdom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fable_elmish_elmish__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_snabbdom_modules_attributes__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_snabbdom_modules_attributes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_snabbdom_modules_attributes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_snabbdom_modules_class__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_snabbdom_modules_class___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_snabbdom_modules_class__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_snabbdom_modules_eventlisteners__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_snabbdom_modules_eventlisteners___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_snabbdom_modules_eventlisteners__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_snabbdom_modules_props__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_snabbdom_modules_props___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_snabbdom_modules_props__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_snabbdom_modules_style__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_snabbdom_modules_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_snabbdom_modules_style__);
/* unused harmony export withSnabbdomAndModules */
/* harmony export (immutable) */ __webpack_exports__["a"] = withSnabbdom;







function withSnabbdomAndModules(modules, placeholderId, program) {
    var node = document.getElementById(placeholderId);
    var patch = __WEBPACK_IMPORTED_MODULE_0_snabbdom_snabbdom__["init"](modules);
    var viewState = node;

    var setState = function setState(model) {
        return function (dispatch) {
            var vnode = program.view(model)(dispatch);
            viewState = patch(viewState, vnode);
        };
    };

    return new __WEBPACK_IMPORTED_MODULE_1_fable_elmish_elmish__["b" /* Program */](program.init, program.update, program.subscribe, program.view, setState, program.onError);
}
function withSnabbdom(placeholderId, program) {
    return withSnabbdomAndModules([__WEBPACK_IMPORTED_MODULE_2_snabbdom_modules_attributes___default.a, __WEBPACK_IMPORTED_MODULE_3_snabbdom_modules_class___default.a, __WEBPACK_IMPORTED_MODULE_4_snabbdom_modules_eventlisteners___default.a, __WEBPACK_IMPORTED_MODULE_5_snabbdom_modules_props___default.a, __WEBPACK_IMPORTED_MODULE_6_snabbdom_modules_style___default.a], placeholderId, program);
}
//# sourceMappingURL=snabbdom.js.map

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(23);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(74);
__webpack_require__(72);
module.exports = __webpack_require__(12).Array.from;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(73);
var $Object = __webpack_require__(12).Object;
module.exports = function defineProperty(it, key, desc){
  return $Object.defineProperty(it, key, desc);
};

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(33)
  , toLength  = __webpack_require__(34)
  , toIndex   = __webpack_require__(69);
module.exports = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    // Array#toIndex ignores holes, Array#includes - not
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(26)
  , TAG = __webpack_require__(3)('toStringTag')
  // ES3 wrong here
  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function(it, key){
  try {
    return it[key];
  } catch(e){ /* empty */ }
};

module.exports = function(it){
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(8)
  , createDesc      = __webpack_require__(20);

module.exports = function(object, index, value){
  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(7).document && document.documentElement;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(6) && !__webpack_require__(30)(function(){
  return Object.defineProperty(__webpack_require__(28)('div'), 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(26);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators  = __webpack_require__(19)
  , ITERATOR   = __webpack_require__(3)('iterator')
  , ArrayProto = Array.prototype;

module.exports = function(it){
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(11);
module.exports = function(iterator, fn, value, entries){
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch(e){
    var ret = iterator['return'];
    if(ret !== undefined)anObject(ret.call(iterator));
    throw e;
  }
};

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create         = __webpack_require__(62)
  , descriptor     = __webpack_require__(20)
  , setToStringTag = __webpack_require__(31)
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(14)(IteratorPrototype, __webpack_require__(3)('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY        = __webpack_require__(61)
  , $export        = __webpack_require__(17)
  , redefine       = __webpack_require__(67)
  , hide           = __webpack_require__(14)
  , has            = __webpack_require__(13)
  , Iterators      = __webpack_require__(19)
  , $iterCreate    = __webpack_require__(58)
  , setToStringTag = __webpack_require__(31)
  , getPrototypeOf = __webpack_require__(64)
  , ITERATOR       = __webpack_require__(3)('iterator')
  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
  , FF_ITERATOR    = '@@iterator'
  , KEYS           = 'keys'
  , VALUES         = 'values';

var returnThis = function(){ return this; };

module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto)return proto[kind];
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
    , methods, key, IteratorPrototype;
  // Fix native
  if($anyNative){
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
    if(IteratorPrototype !== Object.prototype){
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if(DEF_VALUES && $native && $native.name !== VALUES){
    VALUES_BUG = true;
    $default = function values(){ return $native.call(this); };
  }
  // Define iterator
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES ? $default : getMethod(VALUES),
      keys:    IS_SET     ? $default : getMethod(KEYS),
      entries: $entries
    };
    if(FORCED)for(key in methods){
      if(!(key in proto))redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR     = __webpack_require__(3)('iterator')
  , SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function(){ SAFE_CLOSING = true; };
  Array.from(riter, function(){ throw 2; });
} catch(e){ /* empty */ }

module.exports = function(exec, skipClosing){
  if(!skipClosing && !SAFE_CLOSING)return false;
  var safe = false;
  try {
    var arr  = [7]
      , iter = arr[ITERATOR]();
    iter.next = function(){ return {done: safe = true}; };
    arr[ITERATOR] = function(){ return iter; };
    exec(arr);
  } catch(e){ /* empty */ }
  return safe;
};

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = true;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject    = __webpack_require__(11)
  , dPs         = __webpack_require__(63)
  , enumBugKeys = __webpack_require__(29)
  , IE_PROTO    = __webpack_require__(21)('IE_PROTO')
  , Empty       = function(){ /* empty */ }
  , PROTOTYPE   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(28)('iframe')
    , i      = enumBugKeys.length
    , lt     = '<'
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(53).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties){
  var result;
  if(O !== null){
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty;
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var dP       = __webpack_require__(8)
  , anObject = __webpack_require__(11)
  , getKeys  = __webpack_require__(66);

module.exports = __webpack_require__(6) ? Object.defineProperties : function defineProperties(O, Properties){
  anObject(O);
  var keys   = getKeys(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
  return O;
};

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has         = __webpack_require__(13)
  , toObject    = __webpack_require__(35)
  , IE_PROTO    = __webpack_require__(21)('IE_PROTO')
  , ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function(O){
  O = toObject(O);
  if(has(O, IE_PROTO))return O[IE_PROTO];
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var has          = __webpack_require__(13)
  , toIObject    = __webpack_require__(33)
  , arrayIndexOf = __webpack_require__(50)(false)
  , IE_PROTO     = __webpack_require__(21)('IE_PROTO');

module.exports = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while(names.length > i)if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = __webpack_require__(65)
  , enumBugKeys = __webpack_require__(29);

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(14);

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(22)
  , defined   = __webpack_require__(16);
// true  -> String#at
// false -> String#codePointAt
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String(defined(that))
      , i = toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(22)
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(18);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var classof   = __webpack_require__(51)
  , ITERATOR  = __webpack_require__(3)('iterator')
  , Iterators = __webpack_require__(19);
module.exports = __webpack_require__(12).getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx            = __webpack_require__(27)
  , $export        = __webpack_require__(17)
  , toObject       = __webpack_require__(35)
  , call           = __webpack_require__(57)
  , isArrayIter    = __webpack_require__(56)
  , toLength       = __webpack_require__(34)
  , createProperty = __webpack_require__(52)
  , getIterFn      = __webpack_require__(71);

$export($export.S + $export.F * !__webpack_require__(60)(function(iter){ Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
    var O       = toObject(arrayLike)
      , C       = typeof this == 'function' ? this : Array
      , aLen    = arguments.length
      , mapfn   = aLen > 1 ? arguments[1] : undefined
      , mapping = mapfn !== undefined
      , index   = 0
      , iterFn  = getIterFn(O)
      , length, result, step, iterator;
    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for(result = new C(length); length > index; index++){
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(17);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(6), 'Object', {defineProperty: __webpack_require__(8).f});

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at  = __webpack_require__(68)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(59)(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length)return {value: undefined, done: true};
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});

/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export addRangeInPlace */
/* unused harmony export copyTo */
/* unused harmony export partition */
/* harmony export (immutable) */ __webpack_exports__["a"] = permute;
/* unused harmony export removeInPlace */
/* unused harmony export setSlice */
/* unused harmony export sortInPlaceBy */
/* unused harmony export unzip */
/* unused harmony export unzip3 */
/* unused harmony export getSubArray */
/* unused harmony export fill */
function addRangeInPlace(range, xs) {
    var iter = range[Symbol.iterator]();
    var cur = iter.next();
    while (!cur.done) {
        xs.push(cur.value);
        cur = iter.next();
    }
}
function copyTo(source, sourceIndex, target, targetIndex, count) {
    while (count--)
        target[targetIndex++] = source[sourceIndex++];
}
function partition(f, xs) {
    var ys = [], zs = [], j = 0, k = 0;
    for (var i = 0; i < xs.length; i++)
        if (f(xs[i]))
            ys[j++] = xs[i];
        else
            zs[k++] = xs[i];
    return [ys, zs];
}
function permute(f, xs) {
    var ys = xs.map(function () { return null; });
    var checkFlags = new Array(xs.length);
    for (var i = 0; i < xs.length; i++) {
        var j = f(i);
        if (j < 0 || j >= xs.length)
            throw new Error("Not a valid permutation");
        ys[j] = xs[i];
        checkFlags[j] = 1;
    }
    for (var i = 0; i < xs.length; i++)
        if (checkFlags[i] != 1)
            throw new Error("Not a valid permutation");
    return ys;
}
function removeInPlace(item, xs) {
    var i = xs.indexOf(item);
    if (i > -1) {
        xs.splice(i, 1);
        return true;
    }
    return false;
}
function setSlice(target, lower, upper, source) {
    var length = (upper || target.length - 1) - lower;
    if (ArrayBuffer.isView(target) && source.length <= length)
        target.set(source, lower);
    else
        for (var i = lower | 0, j = 0; j <= length; i++, j++)
            target[i] = source[j];
}
function sortInPlaceBy(f, xs, dir) {
    if (dir === void 0) { dir = 1; }
    return xs.sort(function (x, y) {
        x = f(x);
        y = f(y);
        return (x < y ? -1 : x == y ? 0 : 1) * dir;
    });
}
function unzip(xs) {
    var bs = new Array(xs.length), cs = new Array(xs.length);
    for (var i = 0; i < xs.length; i++) {
        bs[i] = xs[i][0];
        cs[i] = xs[i][1];
    }
    return [bs, cs];
}
function unzip3(xs) {
    var bs = new Array(xs.length), cs = new Array(xs.length), ds = new Array(xs.length);
    for (var i = 0; i < xs.length; i++) {
        bs[i] = xs[i][0];
        cs[i] = xs[i][1];
        ds[i] = xs[i][2];
    }
    return [bs, cs, ds];
}
function getSubArray(xs, startIndex, count) {
    return xs.slice(startIndex, startIndex + count);
}
function fill(target, targetIndex, count, value) {
    target.fill(value, targetIndex, targetIndex + count);
}


/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Symbol__ = __webpack_require__(2);


var GenericComparer = (function () {
    function GenericComparer(f) {
        this.Compare = f || __WEBPACK_IMPORTED_MODULE_0__Util__["g" /* compare */];
    }
    GenericComparer.prototype[__WEBPACK_IMPORTED_MODULE_1__Symbol__["a" /* default */].reflection] = function () {
        return { interfaces: ["System.IComparer"] };
    };
    return GenericComparer;
}());
/* harmony default export */ __webpack_exports__["a"] = GenericComparer;


/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Async__ = __webpack_require__(15);
/* harmony export (immutable) */ __webpack_exports__["a"] = start;



var QueueCell = (function () {
    function QueueCell(message) {
        this.value = message;
    }
    return QueueCell;
}());
var MailboxQueue = (function () {
    function MailboxQueue() {
    }
    MailboxQueue.prototype.add = function (message) {
        var itCell = new QueueCell(message);
        if (this.firstAndLast) {
            this.firstAndLast[1].next = itCell;
            this.firstAndLast = [this.firstAndLast[0], itCell];
        }
        else
            this.firstAndLast = [itCell, itCell];
    };
    MailboxQueue.prototype.tryGet = function () {
        if (this.firstAndLast) {
            var value = this.firstAndLast[0].value;
            if (this.firstAndLast[0].next)
                this.firstAndLast = [this.firstAndLast[0].next, this.firstAndLast[1]];
            else
                delete this.firstAndLast;
            return value;
        }
        return void 0;
    };
    return MailboxQueue;
}());
var MailboxProcessor = (function () {
    function MailboxProcessor(body, cancellationToken) {
        this.body = body;
        this.cancellationToken = cancellationToken || __WEBPACK_IMPORTED_MODULE_0__Async__["c" /* defaultCancellationToken */];
        this.messages = new MailboxQueue();
    }
    MailboxProcessor.prototype.__processEvents = function () {
        if (this.continuation) {
            var value = this.messages.tryGet();
            if (value) {
                var cont = this.continuation;
                delete this.continuation;
                cont(value);
            }
        }
    };
    MailboxProcessor.prototype.start = function () {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Async__["b" /* startImmediate */])(this.body(this), this.cancellationToken);
    };
    MailboxProcessor.prototype.receive = function () {
        var _this = this;
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Async__["d" /* fromContinuations */])(function (conts) {
            if (_this.continuation)
                throw new Error("Receive can only be called once!");
            _this.continuation = conts[0];
            _this.__processEvents();
        });
    };
    MailboxProcessor.prototype.post = function (message) {
        this.messages.add(message);
        this.__processEvents();
    };
    MailboxProcessor.prototype.postAndAsyncReply = function (buildMessage) {
        var result;
        var continuation;
        function checkCompletion() {
            if (result && continuation)
                continuation(result);
        }
        var reply = {
            reply: function (res) {
                result = res;
                checkCompletion();
            }
        };
        this.messages.add(buildMessage(reply));
        this.__processEvents();
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Async__["d" /* fromContinuations */])(function (conts) {
            continuation = conts[0];
            checkCompletion();
        });
    };
    return MailboxProcessor;
}());
/* unused harmony default export */ var _unused_webpack_default_export = MailboxProcessor;
function start(body, cancellationToken) {
    var mbox = new MailboxProcessor(body, cancellationToken);
    mbox.start();
    return mbox;
}


/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ListClass__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__GenericComparer__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Symbol__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Seq__ = __webpack_require__(1);
/* harmony export (immutable) */ __webpack_exports__["a"] = groupBy;
/* unused harmony export countBy */
/* unused harmony export MapTree */
/* unused harmony export create */
/* unused harmony export add */
/* unused harmony export remove */
/* unused harmony export containsValue */
/* unused harmony export tryGetValue */
/* unused harmony export exists */
/* unused harmony export find */
/* unused harmony export tryFind */
/* unused harmony export filter */
/* unused harmony export fold */
/* unused harmony export foldBack */
/* unused harmony export forAll */
/* unused harmony export isEmpty */
/* unused harmony export iterate */
/* unused harmony export map */
/* unused harmony export partition */
/* unused harmony export findKey */
/* unused harmony export tryFindKey */
/* unused harmony export pick */
/* unused harmony export tryPick */












function groupBy(f, xs) {
    var keys = [], iter = xs[Symbol.iterator]();
    var acc = create(), cur = iter.next();
    while (!cur.done) {
        var k = f(cur.value), vs = tryFind(k, acc);
        if (vs == null) {
            keys.push(k);
            acc = add(k, [cur.value], acc);
        }
        else {
            vs.push(cur.value);
        }
        cur = iter.next();
    }
    return keys.map(function (k) { return [k, acc.get(k)]; });
}
function countBy(f, xs) {
    return groupBy(f, xs).map(function (kv) { return [kv[0], kv[1].length]; });
}
var MapTree = (function () {
    function MapTree(caseName, fields) {
        this.Case = caseName;
        this.Fields = fields;
    }
    return MapTree;
}());

function tree_sizeAux(acc, m) {
    return m.Case === "MapOne"
        ? acc + 1
        : m.Case === "MapNode"
            ? tree_sizeAux(tree_sizeAux(acc + 1, m.Fields[2]), m.Fields[3])
            : acc;
}
function tree_size(x) {
    return tree_sizeAux(0, x);
}
function tree_empty() {
    return new MapTree("MapEmpty", []);
}
function tree_height(_arg1) {
    return _arg1.Case === "MapOne" ? 1 : _arg1.Case === "MapNode" ? _arg1.Fields[4] : 0;
}
function tree_isEmpty(m) {
    return m.Case === "MapEmpty" ? true : false;
}
function tree_mk(l, k, v, r) {
    var matchValue = [l, r];
    var $target1 = function () {
        var hl = tree_height(l);
        var hr = tree_height(r);
        var m = hl < hr ? hr : hl;
        return new MapTree("MapNode", [k, v, l, r, m + 1]);
    };
    if (matchValue[0].Case === "MapEmpty") {
        if (matchValue[1].Case === "MapEmpty") {
            return new MapTree("MapOne", [k, v]);
        }
        else {
            return $target1();
        }
    }
    else {
        return $target1();
    }
}
;
function tree_rebalance(t1, k, v, t2) {
    var t1h = tree_height(t1);
    var t2h = tree_height(t2);
    if (t2h > t1h + 2) {
        if (t2.Case === "MapNode") {
            if (tree_height(t2.Fields[2]) > t1h + 1) {
                if (t2.Fields[2].Case === "MapNode") {
                    return tree_mk(tree_mk(t1, k, v, t2.Fields[2].Fields[2]), t2.Fields[2].Fields[0], t2.Fields[2].Fields[1], tree_mk(t2.Fields[2].Fields[3], t2.Fields[0], t2.Fields[1], t2.Fields[3]));
                }
                else {
                    throw new Error("rebalance");
                }
            }
            else {
                return tree_mk(tree_mk(t1, k, v, t2.Fields[2]), t2.Fields[0], t2.Fields[1], t2.Fields[3]);
            }
        }
        else {
            throw new Error("rebalance");
        }
    }
    else {
        if (t1h > t2h + 2) {
            if (t1.Case === "MapNode") {
                if (tree_height(t1.Fields[3]) > t2h + 1) {
                    if (t1.Fields[3].Case === "MapNode") {
                        return tree_mk(tree_mk(t1.Fields[2], t1.Fields[0], t1.Fields[1], t1.Fields[3].Fields[2]), t1.Fields[3].Fields[0], t1.Fields[3].Fields[1], tree_mk(t1.Fields[3].Fields[3], k, v, t2));
                    }
                    else {
                        throw new Error("rebalance");
                    }
                }
                else {
                    return tree_mk(t1.Fields[2], t1.Fields[0], t1.Fields[1], tree_mk(t1.Fields[3], k, v, t2));
                }
            }
            else {
                throw new Error("rebalance");
            }
        }
        else {
            return tree_mk(t1, k, v, t2);
        }
    }
}
function tree_add(comparer, k, v, m) {
    if (m.Case === "MapOne") {
        var c = comparer.Compare(k, m.Fields[0]);
        if (c < 0) {
            return new MapTree("MapNode", [k, v, new MapTree("MapEmpty", []), m, 2]);
        }
        else if (c === 0) {
            return new MapTree("MapOne", [k, v]);
        }
        return new MapTree("MapNode", [k, v, m, new MapTree("MapEmpty", []), 2]);
    }
    else if (m.Case === "MapNode") {
        var c = comparer.Compare(k, m.Fields[0]);
        if (c < 0) {
            return tree_rebalance(tree_add(comparer, k, v, m.Fields[2]), m.Fields[0], m.Fields[1], m.Fields[3]);
        }
        else if (c === 0) {
            return new MapTree("MapNode", [k, v, m.Fields[2], m.Fields[3], m.Fields[4]]);
        }
        return tree_rebalance(m.Fields[2], m.Fields[0], m.Fields[1], tree_add(comparer, k, v, m.Fields[3]));
    }
    return new MapTree("MapOne", [k, v]);
}
function tree_find(comparer, k, m) {
    var res = tree_tryFind(comparer, k, m);
    if (res != null)
        return res;
    throw new Error("key not found");
}
function tree_tryFind(comparer, k, m) {
    if (m.Case === "MapOne") {
        var c = comparer.Compare(k, m.Fields[0]);
        return c === 0 ? m.Fields[1] : null;
    }
    else if (m.Case === "MapNode") {
        var c = comparer.Compare(k, m.Fields[0]);
        if (c < 0) {
            return tree_tryFind(comparer, k, m.Fields[2]);
        }
        else {
            if (c === 0) {
                return m.Fields[1];
            }
            else {
                return tree_tryFind(comparer, k, m.Fields[3]);
            }
        }
    }
    return null;
}
function tree_partition1(comparer, f, k, v, acc1, acc2) {
    return f(k, v) ? [tree_add(comparer, k, v, acc1), acc2] : [acc1, tree_add(comparer, k, v, acc2)];
}
function tree_partitionAux(comparer, f, s, acc_0, acc_1) {
    var acc = [acc_0, acc_1];
    if (s.Case === "MapOne") {
        return tree_partition1(comparer, f, s.Fields[0], s.Fields[1], acc[0], acc[1]);
    }
    else if (s.Case === "MapNode") {
        var acc_2 = tree_partitionAux(comparer, f, s.Fields[3], acc[0], acc[1]);
        var acc_3 = tree_partition1(comparer, f, s.Fields[0], s.Fields[1], acc_2[0], acc_2[1]);
        return tree_partitionAux(comparer, f, s.Fields[2], acc_3[0], acc_3[1]);
    }
    return acc;
}
function tree_partition(comparer, f, s) {
    return tree_partitionAux(comparer, f, s, tree_empty(), tree_empty());
}
function tree_filter1(comparer, f, k, v, acc) {
    return f(k, v) ? tree_add(comparer, k, v, acc) : acc;
}
function tree_filterAux(comparer, f, s, acc) {
    return s.Case === "MapOne" ? tree_filter1(comparer, f, s.Fields[0], s.Fields[1], acc) : s.Case === "MapNode" ? tree_filterAux(comparer, f, s.Fields[3], tree_filter1(comparer, f, s.Fields[0], s.Fields[1], tree_filterAux(comparer, f, s.Fields[2], acc))) : acc;
}
function tree_filter(comparer, f, s) {
    return tree_filterAux(comparer, f, s, tree_empty());
}
function tree_spliceOutSuccessor(m) {
    if (m.Case === "MapOne") {
        return [m.Fields[0], m.Fields[1], new MapTree("MapEmpty", [])];
    }
    else if (m.Case === "MapNode") {
        if (m.Fields[2].Case === "MapEmpty") {
            return [m.Fields[0], m.Fields[1], m.Fields[3]];
        }
        else {
            var kvl = tree_spliceOutSuccessor(m.Fields[2]);
            return [kvl[0], kvl[1], tree_mk(kvl[2], m.Fields[0], m.Fields[1], m.Fields[3])];
        }
    }
    throw new Error("internal error: Map.spliceOutSuccessor");
}
function tree_remove(comparer, k, m) {
    if (m.Case === "MapOne") {
        var c = comparer.Compare(k, m.Fields[0]);
        if (c === 0) {
            return new MapTree("MapEmpty", []);
        }
        else {
            return m;
        }
    }
    else if (m.Case === "MapNode") {
        var c = comparer.Compare(k, m.Fields[0]);
        if (c < 0) {
            return tree_rebalance(tree_remove(comparer, k, m.Fields[2]), m.Fields[0], m.Fields[1], m.Fields[3]);
        }
        else {
            if (c === 0) {
                var matchValue = [m.Fields[2], m.Fields[3]];
                if (matchValue[0].Case === "MapEmpty") {
                    return m.Fields[3];
                }
                else {
                    if (matchValue[1].Case === "MapEmpty") {
                        return m.Fields[2];
                    }
                    else {
                        var patternInput = tree_spliceOutSuccessor(m.Fields[3]);
                        var sv = patternInput[1];
                        var sk = patternInput[0];
                        var r_ = patternInput[2];
                        return tree_mk(m.Fields[2], sk, sv, r_);
                    }
                }
            }
            else {
                return tree_rebalance(m.Fields[2], m.Fields[0], m.Fields[1], tree_remove(comparer, k, m.Fields[3]));
            }
        }
    }
    else {
        return tree_empty();
    }
}
function tree_mem(comparer, k, m) {
    if (m.Case === "MapOne") {
        return comparer.Compare(k, m.Fields[0]) === 0;
    }
    else if (m.Case === "MapNode") {
        var c = comparer.Compare(k, m.Fields[0]);
        if (c < 0) {
            return tree_mem(comparer, k, m.Fields[2]);
        }
        else {
            if (c === 0) {
                return true;
            }
            else {
                return tree_mem(comparer, k, m.Fields[3]);
            }
        }
    }
    else {
        return false;
    }
}
function tree_iter(f, m) {
    if (m.Case === "MapOne") {
        f(m.Fields[0], m.Fields[1]);
    }
    else if (m.Case === "MapNode") {
        tree_iter(f, m.Fields[2]);
        f(m.Fields[0], m.Fields[1]);
        tree_iter(f, m.Fields[3]);
    }
}
function tree_tryPick(f, m) {
    if (m.Case === "MapOne") {
        return f(m.Fields[0], m.Fields[1]);
    }
    else if (m.Case === "MapNode") {
        var matchValue = tree_tryPick(f, m.Fields[2]);
        if (matchValue == null) {
            var matchValue_1 = f(m.Fields[0], m.Fields[1]);
            if (matchValue_1 == null) {
                return tree_tryPick(f, m.Fields[3]);
            }
            else {
                var res = matchValue_1;
                return res;
            }
        }
        else {
            var res = matchValue;
            return res;
        }
    }
    else {
        return null;
    }
}
function tree_exists(f, m) {
    return m.Case === "MapOne" ? f(m.Fields[0], m.Fields[1]) : m.Case === "MapNode" ? (tree_exists(f, m.Fields[2]) ? true : f(m.Fields[0], m.Fields[1])) ? true : tree_exists(f, m.Fields[3]) : false;
}
function tree_forall(f, m) {
    return m.Case === "MapOne" ? f(m.Fields[0], m.Fields[1]) : m.Case === "MapNode" ? (tree_forall(f, m.Fields[2]) ? f(m.Fields[0], m.Fields[1]) : false) ? tree_forall(f, m.Fields[3]) : false : true;
}
function tree_mapi(f, m) {
    return m.Case === "MapOne" ? new MapTree("MapOne", [m.Fields[0], f(m.Fields[0], m.Fields[1])]) : m.Case === "MapNode" ? new MapTree("MapNode", [m.Fields[0], f(m.Fields[0], m.Fields[1]), tree_mapi(f, m.Fields[2]), tree_mapi(f, m.Fields[3]), m.Fields[4]]) : tree_empty();
}
function tree_foldBack(f, m, x) {
    return m.Case === "MapOne" ? f(m.Fields[0], m.Fields[1], x) : m.Case === "MapNode" ? tree_foldBack(f, m.Fields[2], f(m.Fields[0], m.Fields[1], tree_foldBack(f, m.Fields[3], x))) : x;
}
function tree_fold(f, x, m) {
    return m.Case === "MapOne" ? f(x, m.Fields[0], m.Fields[1]) : m.Case === "MapNode" ? tree_fold(f, f(tree_fold(f, x, m.Fields[2]), m.Fields[0], m.Fields[1]), m.Fields[3]) : x;
}
function tree_mkFromEnumerator(comparer, acc, e) {
    var cur = e.next();
    while (!cur.done) {
        acc = tree_add(comparer, cur.value[0], cur.value[1], acc);
        cur = e.next();
    }
    return acc;
}
function tree_ofSeq(comparer, c) {
    var ie = c[Symbol.iterator]();
    return tree_mkFromEnumerator(comparer, tree_empty(), ie);
}
function tree_collapseLHS(stack) {
    if (stack.tail != null) {
        if (stack.head.Case === "MapOne") {
            return stack;
        }
        else if (stack.head.Case === "MapNode") {
            return tree_collapseLHS(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__ListClass__["b" /* ofArray */])([
                stack.head.Fields[2],
                new MapTree("MapOne", [stack.head.Fields[0], stack.head.Fields[1]]),
                stack.head.Fields[3]
            ], stack.tail));
        }
        else {
            return tree_collapseLHS(stack.tail);
        }
    }
    else {
        return new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */]();
    }
}
function tree_mkIterator(s) {
    return { stack: tree_collapseLHS(new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](s, new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */]())), started: false };
}
function tree_moveNext(i) {
    function current(i) {
        if (i.stack.tail == null) {
            return null;
        }
        else if (i.stack.head.Case === "MapOne") {
            return [i.stack.head.Fields[0], i.stack.head.Fields[1]];
        }
        throw new Error("Please report error: Map iterator, unexpected stack for current");
    }
    if (i.started) {
        if (i.stack.tail == null) {
            return { done: true, value: null };
        }
        else {
            if (i.stack.head.Case === "MapOne") {
                i.stack = tree_collapseLHS(i.stack.tail);
                return {
                    done: i.stack.tail == null,
                    value: current(i)
                };
            }
            else {
                throw new Error("Please report error: Map iterator, unexpected stack for moveNext");
            }
        }
    }
    else {
        i.started = true;
        return {
            done: i.stack.tail == null,
            value: current(i)
        };
    }
    ;
}
var FableMap = (function () {
    function FableMap() {
    }
    FableMap.prototype.ToString = function () {
        return "map [" + Array.from(this).map(__WEBPACK_IMPORTED_MODULE_1__Util__["h" /* toString */]).join("; ") + "]";
    };
    FableMap.prototype.Equals = function (m2) {
        return this.CompareTo(m2) === 0;
    };
    FableMap.prototype.CompareTo = function (m2) {
        var _this = this;
        return this === m2 ? 0 : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__Seq__["g" /* compareWith */])(function (kvp1, kvp2) {
            var c = _this.comparer.Compare(kvp1[0], kvp2[0]);
            return c !== 0 ? c : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Util__["g" /* compare */])(kvp1[1], kvp2[1]);
        }, this, m2);
    };
    FableMap.prototype[Symbol.iterator] = function () {
        var i = tree_mkIterator(this.tree);
        return {
            next: function () { return tree_moveNext(i); }
        };
    };
    FableMap.prototype.entries = function () {
        return this[Symbol.iterator]();
    };
    FableMap.prototype.keys = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__Seq__["d" /* map */])(function (kv) { return kv[0]; }, this);
    };
    FableMap.prototype.values = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__Seq__["d" /* map */])(function (kv) { return kv[1]; }, this);
    };
    FableMap.prototype.get = function (k) {
        return tree_find(this.comparer, k, this.tree);
    };
    FableMap.prototype.has = function (k) {
        return tree_mem(this.comparer, k, this.tree);
    };
    FableMap.prototype.set = function (k, v) {
        throw new Error("not supported");
    };
    FableMap.prototype.delete = function (k) {
        throw new Error("not supported");
    };
    FableMap.prototype.clear = function () {
        throw new Error("not supported");
    };
    Object.defineProperty(FableMap.prototype, "size", {
        get: function () {
            return tree_size(this.tree);
        },
        enumerable: true,
        configurable: true
    });
    FableMap.prototype[__WEBPACK_IMPORTED_MODULE_3__Symbol__["a" /* default */].reflection] = function () {
        return {
            type: "Microsoft.FSharp.Collections.FSharpMap",
            interfaces: ["System.IEquatable", "System.IComparable", "System.Collections.Generic.IDictionary"]
        };
    };
    return FableMap;
}());
/* unused harmony default export */ var _unused_webpack_default_export = FableMap;
function from(comparer, tree) {
    var map = new FableMap();
    map.tree = tree;
    map.comparer = comparer || new __WEBPACK_IMPORTED_MODULE_2__GenericComparer__["a" /* default */]();
    return map;
}
function create(ie, comparer) {
    comparer = comparer || new __WEBPACK_IMPORTED_MODULE_2__GenericComparer__["a" /* default */]();
    return from(comparer, ie ? tree_ofSeq(comparer, ie) : tree_empty());
}
function add(k, v, map) {
    return from(map.comparer, tree_add(map.comparer, k, v, map.tree));
}
function remove(item, map) {
    return from(map.comparer, tree_remove(map.comparer, item, map.tree));
}
function containsValue(v, map) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__Seq__["a" /* fold */])(function (acc, k) { return acc || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Util__["f" /* equals */])(map.get(k), v); }, false, map.keys());
}
function tryGetValue(map, key, defaultValue) {
    return map.has(key) ? [true, map.get(key)] : [false, defaultValue];
}
function exists(f, map) {
    return tree_exists(f, map.tree);
}
function find(k, map) {
    return tree_find(map.comparer, k, map.tree);
}
function tryFind(k, map) {
    return tree_tryFind(map.comparer, k, map.tree);
}
function filter(f, map) {
    return from(map.comparer, tree_filter(map.comparer, f, map.tree));
}
function fold(f, seed, map) {
    return tree_fold(f, seed, map.tree);
}
function foldBack(f, map, seed) {
    return tree_foldBack(f, map.tree, seed);
}
function forAll(f, map) {
    return tree_forall(f, map.tree);
}
function isEmpty(map) {
    return tree_isEmpty(map.tree);
}
function iterate(f, map) {
    tree_iter(f, map.tree);
}
function map(f, map) {
    return from(map.comparer, tree_mapi(f, map.tree));
}
function partition(f, map) {
    var rs = tree_partition(map.comparer, f, map.tree);
    return [from(map.comparer, rs[0]), from(map.comparer, rs[1])];
}
function findKey(f, map) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__Seq__["h" /* pick */])(function (kv) { return f(kv[0], kv[1]) ? kv[0] : null; }, map);
}
function tryFindKey(f, map) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__Seq__["i" /* tryPick */])(function (kv) { return f(kv[0], kv[1]) ? kv[0] : null; }, map);
}
function pick(f, map) {
    var res = tryPick(f, map);
    if (res != null)
        return res;
    throw new Error("key not found");
}
function tryPick(f, map) {
    return tree_tryPick(f, map.tree);
}


/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export create */
/* harmony export (immutable) */ __webpack_exports__["a"] = escape;
/* unused harmony export unescape */
/* unused harmony export isMatch */
/* unused harmony export match */
/* unused harmony export matches */
/* unused harmony export options */
/* unused harmony export replace */
/* unused harmony export split */
function create(pattern, options) {
    var flags = "g";
    flags += options & 1 ? "i" : "";
    flags += options & 2 ? "m" : "";
    return new RegExp(pattern, flags);
}
function escape(str) {
    return str.replace(/[\-\[\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}
function unescape(str) {
    return str.replace(/\\([\-\[\/\{\}\(\)\*\+\?\.\\\^\$\|])/g, "$1");
}
function isMatch(str, pattern, options) {
    if (options === void 0) { options = 0; }
    var reg = str instanceof RegExp
        ? (reg = str, str = pattern, reg.lastIndex = options, reg)
        : reg = create(pattern, options);
    return reg.test(str);
}
function match(str, pattern, options) {
    if (options === void 0) { options = 0; }
    var reg = str instanceof RegExp
        ? (reg = str, str = pattern, reg.lastIndex = options, reg)
        : reg = create(pattern, options);
    return reg.exec(str);
}
function matches(str, pattern, options) {
    if (options === void 0) { options = 0; }
    var reg = str instanceof RegExp
        ? (reg = str, str = pattern, reg.lastIndex = options, reg)
        : reg = create(pattern, options);
    if (!reg.global)
        throw new Error("Non-global RegExp");
    var m;
    var matches = [];
    while ((m = reg.exec(str)) !== null)
        matches.push(m);
    return matches;
}
function options(reg) {
    var options = 256;
    options |= reg.ignoreCase ? 1 : 0;
    options |= reg.multiline ? 2 : 0;
    return options;
}
function replace(reg, input, replacement, limit, offset) {
    if (offset === void 0) { offset = 0; }
    function replacer() {
        var res = arguments[0];
        if (limit !== 0) {
            limit--;
            var match_1 = [];
            var len = arguments.length;
            for (var i = 0; i < len - 2; i++)
                match_1.push(arguments[i]);
            match_1.index = arguments[len - 2];
            match_1.input = arguments[len - 1];
            res = replacement(match_1);
        }
        return res;
    }
    if (typeof reg == "string") {
        var tmp = reg;
        reg = create(input, limit);
        input = tmp;
        limit = undefined;
    }
    if (typeof replacement == "function") {
        limit = limit == null ? -1 : limit;
        return input.substring(0, offset) + input.substring(offset).replace(reg, replacer);
    }
    else {
        if (limit != null) {
            var m = void 0;
            var sub1 = input.substring(offset);
            var _matches = matches(reg, sub1);
            var sub2 = matches.length > limit ? (m = _matches[limit - 1], sub1.substring(0, m.index + m[0].length)) : sub1;
            return input.substring(0, offset) + sub2.replace(reg, replacement) + input.substring(offset + sub2.length);
        }
        else {
            return input.replace(reg, replacement);
        }
    }
}
function split(reg, input, limit, offset) {
    if (offset === void 0) { offset = 0; }
    if (typeof reg == "string") {
        var tmp = reg;
        reg = create(input, limit);
        input = tmp;
        limit = undefined;
    }
    input = input.substring(offset);
    return input.split(reg, limit);
}


/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Long__ = __webpack_require__(38);
/* harmony export (immutable) */ __webpack_exports__["a"] = create;
/* unused harmony export fromTicks */
/* unused harmony export fromDays */
/* unused harmony export fromHours */
/* unused harmony export fromMinutes */
/* unused harmony export fromSeconds */
/* unused harmony export days */
/* unused harmony export hours */
/* unused harmony export minutes */
/* unused harmony export seconds */
/* unused harmony export milliseconds */
/* unused harmony export ticks */
/* unused harmony export totalDays */
/* unused harmony export totalHours */
/* unused harmony export totalMinutes */
/* unused harmony export totalSeconds */
/* unused harmony export negate */
/* unused harmony export add */
/* unused harmony export subtract */
/* unused harmony export compare */
/* unused harmony export compareTo */
/* unused harmony export duration */


function create(d, h, m, s, ms) {
    if (d === void 0) { d = 0; }
    if (h === void 0) { h = 0; }
    if (m === void 0) { m = 0; }
    if (s === void 0) { s = 0; }
    if (ms === void 0) { ms = 0; }
    switch (arguments.length) {
        case 1:
            return fromTicks(arguments[0]);
        case 3:
            d = 0, h = arguments[0], m = arguments[1], s = arguments[2], ms = 0;
            break;
        default:
            d = arguments[0], h = arguments[1], m = arguments[2], s = arguments[3], ms = arguments[4] || 0;
            break;
    }
    return d * 86400000 + h * 3600000 + m * 60000 + s * 1000 + ms;
}
function fromTicks(ticks) {
    return ticks.div(10000).toNumber();
}
function fromDays(d) {
    return create(d, 0, 0, 0);
}
function fromHours(h) {
    return create(h, 0, 0);
}
function fromMinutes(m) {
    return create(0, m, 0);
}
function fromSeconds(s) {
    return create(0, 0, s);
}
function days(ts) {
    return Math.floor(ts / 86400000);
}
function hours(ts) {
    return Math.floor(ts % 86400000 / 3600000);
}
function minutes(ts) {
    return Math.floor(ts % 3600000 / 60000);
}
function seconds(ts) {
    return Math.floor(ts % 60000 / 1000);
}
function milliseconds(ts) {
    return Math.floor(ts % 1000);
}
function ticks(ts) {
    return __WEBPACK_IMPORTED_MODULE_1__Long__["a" /* fromNumber */](ts).mul(10000);
}
function totalDays(ts) {
    return ts / 86400000;
}
function totalHours(ts) {
    return ts / 3600000;
}
function totalMinutes(ts) {
    return ts / 60000;
}
function totalSeconds(ts) {
    return ts / 1000;
}
function negate(ts) {
    return ts * -1;
}
function add(ts1, ts2) {
    return ts1 + ts2;
}
function subtract(ts1, ts2) {
    return ts1 - ts2;
}
function compare(x, y) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Util__["g" /* compare */])(x, y);
}
function compareTo(x, y) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Util__["g" /* compare */])(x, y);
}
function duration(x) {
    return Math.abs(x);
}


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function createElement(tagName) {
    return document.createElement(tagName);
}
function createElementNS(namespaceURI, qualifiedName) {
    return document.createElementNS(namespaceURI, qualifiedName);
}
function createTextNode(text) {
    return document.createTextNode(text);
}
function createComment(text) {
    return document.createComment(text);
}
function insertBefore(parentNode, newNode, referenceNode) {
    parentNode.insertBefore(newNode, referenceNode);
}
function removeChild(node, child) {
    node.removeChild(child);
}
function appendChild(node, child) {
    node.appendChild(child);
}
function parentNode(node) {
    return node.parentNode;
}
function nextSibling(node) {
    return node.nextSibling;
}
function tagName(elm) {
    return elm.tagName;
}
function setTextContent(node, text) {
    node.textContent = text;
}
function getTextContent(node) {
    return node.textContent;
}
function isElement(node) {
    return node.nodeType === 1;
}
function isText(node) {
    return node.nodeType === 3;
}
function isComment(node) {
    return node.nodeType === 8;
}
exports.htmlDomApi = {
    createElement: createElement,
    createElementNS: createElementNS,
    createTextNode: createTextNode,
    createComment: createComment,
    insertBefore: insertBefore,
    removeChild: removeChild,
    appendChild: appendChild,
    parentNode: parentNode,
    nextSibling: nextSibling,
    tagName: tagName,
    setTextContent: setTextContent,
    getTextContent: getTextContent,
    isElement: isElement,
    isText: isText,
    isComment: isComment,
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.htmlDomApi;
//# sourceMappingURL=htmldomapi.js.map

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var NamespaceURIs = {
    "xlink": "http://www.w3.org/1999/xlink"
};
var booleanAttrs = ["allowfullscreen", "async", "autofocus", "autoplay", "checked", "compact", "controls", "declare",
    "default", "defaultchecked", "defaultmuted", "defaultselected", "defer", "disabled", "draggable",
    "enabled", "formnovalidate", "hidden", "indeterminate", "inert", "ismap", "itemscope", "loop", "multiple",
    "muted", "nohref", "noresize", "noshade", "novalidate", "nowrap", "open", "pauseonexit", "readonly",
    "required", "reversed", "scoped", "seamless", "selected", "sortable", "spellcheck", "translate",
    "truespeed", "typemustmatch", "visible"];
var booleanAttrsDict = Object.create(null);
for (var i = 0, len = booleanAttrs.length; i < len; i++) {
    booleanAttrsDict[booleanAttrs[i]] = true;
}
function updateAttrs(oldVnode, vnode) {
    var key, elm = vnode.elm, oldAttrs = oldVnode.data.attrs, attrs = vnode.data.attrs, namespaceSplit;
    if (!oldAttrs && !attrs)
        return;
    if (oldAttrs === attrs)
        return;
    oldAttrs = oldAttrs || {};
    attrs = attrs || {};
    // update modified attributes, add new attributes
    for (key in attrs) {
        var cur = attrs[key];
        var old = oldAttrs[key];
        if (old !== cur) {
            if (booleanAttrsDict[key]) {
                if (cur) {
                    elm.setAttribute(key, "");
                }
                else {
                    elm.removeAttribute(key);
                }
            }
            else {
                namespaceSplit = key.split(":");
                if (namespaceSplit.length > 1 && NamespaceURIs.hasOwnProperty(namespaceSplit[0])) {
                    elm.setAttributeNS(NamespaceURIs[namespaceSplit[0]], key, cur);
                }
                else {
                    elm.setAttribute(key, cur);
                }
            }
        }
    }
    // remove removed attributes
    // use `in` operator since the previous `for` iteration uses it (.i.e. add even attributes with undefined value)
    // the other option is to remove all attributes with value == undefined
    for (key in oldAttrs) {
        if (!(key in attrs)) {
            elm.removeAttribute(key);
        }
    }
}
exports.attributesModule = { create: updateAttrs, update: updateAttrs };
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.attributesModule;
//# sourceMappingURL=attributes.js.map

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function updateClass(oldVnode, vnode) {
    var cur, name, elm = vnode.elm, oldClass = oldVnode.data.class, klass = vnode.data.class;
    if (!oldClass && !klass)
        return;
    if (oldClass === klass)
        return;
    oldClass = oldClass || {};
    klass = klass || {};
    for (name in oldClass) {
        if (!klass[name]) {
            elm.classList.remove(name);
        }
    }
    for (name in klass) {
        cur = klass[name];
        if (cur !== oldClass[name]) {
            elm.classList[cur ? 'add' : 'remove'](name);
        }
    }
}
exports.classModule = { create: updateClass, update: updateClass };
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.classModule;
//# sourceMappingURL=class.js.map

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function invokeHandler(handler, vnode, event) {
    if (typeof handler === "function") {
        // call function handler
        handler.call(vnode, event, vnode);
    }
    else if (typeof handler === "object") {
        // call handler with arguments
        if (typeof handler[0] === "function") {
            // special case for single argument for performance
            if (handler.length === 2) {
                handler[0].call(vnode, handler[1], event, vnode);
            }
            else {
                var args = handler.slice(1);
                args.push(event);
                args.push(vnode);
                handler[0].apply(vnode, args);
            }
        }
        else {
            // call multiple handlers
            for (var i = 0; i < handler.length; i++) {
                invokeHandler(handler[i]);
            }
        }
    }
}
function handleEvent(event, vnode) {
    var name = event.type, on = vnode.data.on;
    // call event handler(s) if exists
    if (on && on[name]) {
        invokeHandler(on[name], vnode, event);
    }
}
function createListener() {
    return function handler(event) {
        handleEvent(event, handler.vnode);
    };
}
function updateEventListeners(oldVnode, vnode) {
    var oldOn = oldVnode.data.on, oldListener = oldVnode.listener, oldElm = oldVnode.elm, on = vnode && vnode.data.on, elm = (vnode && vnode.elm), name;
    // optimization for reused immutable handlers
    if (oldOn === on) {
        return;
    }
    // remove existing listeners which no longer used
    if (oldOn && oldListener) {
        // if element changed or deleted we remove all existing listeners unconditionally
        if (!on) {
            for (name in oldOn) {
                // remove listener if element was changed or existing listeners removed
                oldElm.removeEventListener(name, oldListener, false);
            }
        }
        else {
            for (name in oldOn) {
                // remove listener if existing listener removed
                if (!on[name]) {
                    oldElm.removeEventListener(name, oldListener, false);
                }
            }
        }
    }
    // add new listeners which has not already attached
    if (on) {
        // reuse existing listener or create new
        var listener = vnode.listener = oldVnode.listener || createListener();
        // update vnode for listener
        listener.vnode = vnode;
        // if element changed or added we add all needed listeners unconditionally
        if (!oldOn) {
            for (name in on) {
                // add listener if element was changed or new listeners added
                elm.addEventListener(name, listener, false);
            }
        }
        else {
            for (name in on) {
                // add listener if new listener added
                if (!oldOn[name]) {
                    elm.addEventListener(name, listener, false);
                }
            }
        }
    }
}
exports.eventListenersModule = {
    create: updateEventListeners,
    update: updateEventListeners,
    destroy: updateEventListeners
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.eventListenersModule;
//# sourceMappingURL=eventlisteners.js.map

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function updateProps(oldVnode, vnode) {
    var key, cur, old, elm = vnode.elm, oldProps = oldVnode.data.props, props = vnode.data.props;
    if (!oldProps && !props)
        return;
    if (oldProps === props)
        return;
    oldProps = oldProps || {};
    props = props || {};
    for (key in oldProps) {
        if (!props[key]) {
            delete elm[key];
        }
    }
    for (key in props) {
        cur = props[key];
        old = oldProps[key];
        if (old !== cur && (key !== 'value' || elm[key] !== cur)) {
            elm[key] = cur;
        }
    }
}
exports.propsModule = { create: updateProps, update: updateProps };
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.propsModule;
//# sourceMappingURL=props.js.map

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var raf = (typeof window !== 'undefined' && window.requestAnimationFrame) || setTimeout;
var nextFrame = function (fn) { raf(function () { raf(fn); }); };
function setNextFrame(obj, prop, val) {
    nextFrame(function () { obj[prop] = val; });
}
function updateStyle(oldVnode, vnode) {
    var cur, name, elm = vnode.elm, oldStyle = oldVnode.data.style, style = vnode.data.style;
    if (!oldStyle && !style)
        return;
    if (oldStyle === style)
        return;
    oldStyle = oldStyle || {};
    style = style || {};
    var oldHasDel = 'delayed' in oldStyle;
    for (name in oldStyle) {
        if (!style[name]) {
            if (name[0] === '-' && name[1] === '-') {
                elm.style.removeProperty(name);
            }
            else {
                elm.style[name] = '';
            }
        }
    }
    for (name in style) {
        cur = style[name];
        if (name === 'delayed') {
            for (name in style.delayed) {
                cur = style.delayed[name];
                if (!oldHasDel || cur !== oldStyle.delayed[name]) {
                    setNextFrame(elm.style, name, cur);
                }
            }
        }
        else if (name !== 'remove' && cur !== oldStyle[name]) {
            if (name[0] === '-' && name[1] === '-') {
                elm.style.setProperty(name, cur);
            }
            else {
                elm.style[name] = cur;
            }
        }
    }
}
function applyDestroyStyle(vnode) {
    var style, name, elm = vnode.elm, s = vnode.data.style;
    if (!s || !(style = s.destroy))
        return;
    for (name in style) {
        elm.style[name] = style[name];
    }
}
function applyRemoveStyle(vnode, rm) {
    var s = vnode.data.style;
    if (!s || !s.remove) {
        rm();
        return;
    }
    var name, elm = vnode.elm, i = 0, compStyle, style = s.remove, amount = 0, applied = [];
    for (name in style) {
        applied.push(name);
        elm.style[name] = style[name];
    }
    compStyle = getComputedStyle(elm);
    var props = compStyle['transition-property'].split(', ');
    for (; i < props.length; ++i) {
        if (applied.indexOf(props[i]) !== -1)
            amount++;
    }
    elm.addEventListener('transitionend', function (ev) {
        if (ev.target === elm)
            --amount;
        if (amount === 0)
            rm();
    });
}
exports.styleModule = {
    create: updateStyle,
    update: updateStyle,
    destroy: applyDestroyStyle,
    remove: applyRemoveStyle
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.styleModule;
//# sourceMappingURL=style.js.map

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var h_1 = __webpack_require__(39);
function copyToThunk(vnode, thunk) {
    thunk.elm = vnode.elm;
    vnode.data.fn = thunk.data.fn;
    vnode.data.args = thunk.data.args;
    thunk.data = vnode.data;
    thunk.children = vnode.children;
    thunk.text = vnode.text;
    thunk.elm = vnode.elm;
}
function init(thunk) {
    var cur = thunk.data;
    var vnode = cur.fn.apply(undefined, cur.args);
    copyToThunk(vnode, thunk);
}
function prepatch(oldVnode, thunk) {
    var i, old = oldVnode.data, cur = thunk.data;
    var oldArgs = old.args, args = cur.args;
    if (old.fn !== cur.fn || oldArgs.length !== args.length) {
        copyToThunk(cur.fn.apply(undefined, args), thunk);
    }
    for (i = 0; i < args.length; ++i) {
        if (oldArgs[i] !== args[i]) {
            copyToThunk(cur.fn.apply(undefined, args), thunk);
            return;
        }
    }
    copyToThunk(oldVnode, thunk);
}
exports.thunk = function thunk(sel, key, fn, args) {
    if (args === undefined) {
        args = fn;
        fn = key;
        key = undefined;
    }
    return h_1.h(sel, {
        key: key,
        hook: { init: init, prepatch: prepatch },
        fn: fn,
        args: args
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.thunk;
//# sourceMappingURL=thunk.js.map

/***/ }),
/* 88 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_array_from__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_array_from___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_array_from__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_define_property__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_define_property___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_define_property__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_fable_core_Symbol__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_fable_core_Util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_fable_core_List__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_fable_core_String__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_snabbdom__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_snabbdom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_snabbdom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_fable_core_Seq__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__node_modules_fable_elmish_elmish__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__node_modules_fable_elmish_snabbdom_snabbdom__ = __webpack_require__(44);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ESC_KEY", function() { return ESC_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENTER_KEY", function() { return ENTER_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALL_TODOS", function() { return ALL_TODOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACTIVE_TODOS", function() { return ACTIVE_TODOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPLETED_TODOS", function() { return COMPLETED_TODOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Entry", function() { return Entry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Model", function() { return Model; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emptyModel", function() { return emptyModel; });
/* harmony export (immutable) */ __webpack_exports__["newEntry"] = newEntry;
/* harmony export (immutable) */ __webpack_exports__["init"] = init;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Msg", function() { return Msg; });
/* harmony export (immutable) */ __webpack_exports__["update"] = update;
/* harmony export (immutable) */ __webpack_exports__["onEnter"] = onEnter;
/* harmony export (immutable) */ __webpack_exports__["viewInput"] = viewInput;
/* harmony export (immutable) */ __webpack_exports__["viewEntry"] = viewEntry;
/* harmony export (immutable) */ __webpack_exports__["viewEntries"] = viewEntries;
/* harmony export (immutable) */ __webpack_exports__["visibilitySwap"] = visibilitySwap;
/* harmony export (immutable) */ __webpack_exports__["viewControlsFilters"] = viewControlsFilters;
/* harmony export (immutable) */ __webpack_exports__["viewControlsCount"] = viewControlsCount;
/* harmony export (immutable) */ __webpack_exports__["viewControlsClear"] = viewControlsClear;
/* harmony export (immutable) */ __webpack_exports__["viewControls"] = viewControls;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "infoFooter", function() { return infoFooter; });
/* harmony export (immutable) */ __webpack_exports__["view"] = view;


var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_define_property___default()(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}











var ESC_KEY = 27;
var ENTER_KEY = 13;
var ALL_TODOS = "all";
var ACTIVE_TODOS = "active";
var COMPLETED_TODOS = "completed";
var Entry = function () {
  function Entry(description, completed, editing, id) {
    _classCallCheck(this, Entry);

    this.Description = description;
    this.Completed = completed;
    this.Editing = editing;
    this.Id = id;
  }

  _createClass(Entry, [{
    key: __WEBPACK_IMPORTED_MODULE_2_fable_core_Symbol__["a" /* default */].reflection,
    value: function () {
      return {
        type: "Todomvc.Entry",
        interfaces: ["FSharpRecord", "System.IEquatable", "System.IComparable"],
        properties: {
          Description: "string",
          Completed: "boolean",
          Editing: "boolean",
          Id: "number"
        }
      };
    }
  }, {
    key: "Equals",
    value: function (other) {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_fable_core_Util__["a" /* equalsRecords */])(this, other);
    }
  }, {
    key: "CompareTo",
    value: function (other) {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_fable_core_Util__["b" /* compareRecords */])(this, other);
    }
  }]);

  return Entry;
}();
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_fable_core_Symbol__["b" /* setType */])("Todomvc.Entry", Entry);
var Model = function () {
  function Model(entries, field, uid, visibility) {
    _classCallCheck(this, Model);

    this.Entries = entries;
    this.Field = field;
    this.Uid = uid;
    this.Visibility = visibility;
  }

  _createClass(Model, [{
    key: __WEBPACK_IMPORTED_MODULE_2_fable_core_Symbol__["a" /* default */].reflection,
    value: function () {
      return {
        type: "Todomvc.Model",
        interfaces: ["FSharpRecord", "System.IEquatable", "System.IComparable"],
        properties: {
          Entries: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_fable_core_Util__["c" /* makeGeneric */])(__WEBPACK_IMPORTED_MODULE_4_fable_core_List__["a" /* default */], {
            T: Entry
          }),
          Field: "string",
          Uid: "number",
          Visibility: "string"
        }
      };
    }
  }, {
    key: "Equals",
    value: function (other) {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_fable_core_Util__["a" /* equalsRecords */])(this, other);
    }
  }, {
    key: "CompareTo",
    value: function (other) {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_fable_core_Util__["b" /* compareRecords */])(this, other);
    }
  }]);

  return Model;
}();
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_fable_core_Symbol__["b" /* setType */])("Todomvc.Model", Model);
var emptyModel = function () {
  var Entries = new __WEBPACK_IMPORTED_MODULE_4_fable_core_List__["a" /* default */]();
  var Visibility = "all";
  return new Model(Entries, "", 0, Visibility);
}();
function newEntry(desc, id) {
  return new Entry(desc, false, false, id);
}
function init(_arg1) {
  return [emptyModel, new __WEBPACK_IMPORTED_MODULE_4_fable_core_List__["a" /* default */]()];
}
var Msg = function () {
  function Msg(caseName, fields) {
    _classCallCheck(this, Msg);

    this.Case = caseName;
    this.Fields = fields;
  }

  _createClass(Msg, [{
    key: __WEBPACK_IMPORTED_MODULE_2_fable_core_Symbol__["a" /* default */].reflection,
    value: function () {
      return {
        type: "Todomvc.Msg",
        interfaces: ["FSharpUnion", "System.IEquatable", "System.IComparable"],
        cases: {
          Add: [],
          ChangeVisibility: ["string"],
          Check: ["number", "boolean"],
          CheckAll: ["boolean"],
          Delete: ["number"],
          DeleteComplete: [],
          EditingEntry: ["number", "boolean"],
          NoOp: [],
          UpdateEntry: ["number", "string"],
          UpdateField: ["string"]
        }
      };
    }
  }, {
    key: "Equals",
    value: function (other) {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_fable_core_Util__["d" /* equalsUnions */])(this, other);
    }
  }, {
    key: "CompareTo",
    value: function (other) {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_fable_core_Util__["e" /* compareUnions */])(this, other);
    }
  }]);

  return Msg;
}();
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_fable_core_Symbol__["b" /* setType */])("Todomvc.Msg", Msg);
function update(msg, model) {
  if (msg.Case === "Add") {
    var xs = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_fable_core_String__["a" /* isNullOrEmpty */])(model.Field) ? model.Entries : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_fable_core_List__["b" /* append */])(model.Entries, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_fable_core_List__["c" /* ofArray */])([newEntry(model.Field, model.Uid)]));
    return [function () {
      var Uid = model.Uid + 1;
      var Field = "";
      return new Model(xs, Field, Uid, model.Visibility);
    }(), new __WEBPACK_IMPORTED_MODULE_4_fable_core_List__["a" /* default */]()];
  } else if (msg.Case === "UpdateField") {
    return [new Model(model.Entries, msg.Fields[0], model.Uid, model.Visibility), new __WEBPACK_IMPORTED_MODULE_4_fable_core_List__["a" /* default */]()];
  } else if (msg.Case === "EditingEntry") {
    var updateEntry = function updateEntry(t) {
      if (t.Id === msg.Fields[0]) {
        return new Entry(t.Description, t.Completed, msg.Fields[1], t.Id);
      } else {
        return t;
      }
    };

    return [new Model(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_fable_core_List__["d" /* map */])(updateEntry, model.Entries), model.Field, model.Uid, model.Visibility), new __WEBPACK_IMPORTED_MODULE_4_fable_core_List__["a" /* default */]()];
  } else if (msg.Case === "UpdateEntry") {
    var updateEntry_1 = function updateEntry_1(t_1) {
      if (t_1.Id === msg.Fields[0]) {
        return new Entry(msg.Fields[1], t_1.Completed, t_1.Editing, t_1.Id);
      } else {
        return t_1;
      }
    };

    return [new Model(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_fable_core_List__["d" /* map */])(updateEntry_1, model.Entries), model.Field, model.Uid, model.Visibility), new __WEBPACK_IMPORTED_MODULE_4_fable_core_List__["a" /* default */]()];
  } else if (msg.Case === "Delete") {
    return [new Model(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_fable_core_List__["e" /* filter */])(function (t_2) {
      return t_2.Id !== msg.Fields[0];
    }, model.Entries), model.Field, model.Uid, model.Visibility), new __WEBPACK_IMPORTED_MODULE_4_fable_core_List__["a" /* default */]()];
  } else if (msg.Case === "DeleteComplete") {
    return [new Model(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_fable_core_List__["e" /* filter */])(function (t_3) {
      return !t_3.Completed;
    }, model.Entries), model.Field, model.Uid, model.Visibility), new __WEBPACK_IMPORTED_MODULE_4_fable_core_List__["a" /* default */]()];
  } else if (msg.Case === "Check") {
    var updateEntry_2 = function updateEntry_2(t_4) {
      if (t_4.Id === msg.Fields[0]) {
        return new Entry(t_4.Description, msg.Fields[1], t_4.Editing, t_4.Id);
      } else {
        return t_4;
      }
    };

    return [new Model(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_fable_core_List__["d" /* map */])(updateEntry_2, model.Entries), model.Field, model.Uid, model.Visibility), new __WEBPACK_IMPORTED_MODULE_4_fable_core_List__["a" /* default */]()];
  } else if (msg.Case === "CheckAll") {
    var updateEntry_3 = function updateEntry_3(t_5) {
      return new Entry(t_5.Description, msg.Fields[0], t_5.Editing, t_5.Id);
    };

    return [new Model(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_fable_core_List__["d" /* map */])(updateEntry_3, model.Entries), model.Field, model.Uid, model.Visibility), new __WEBPACK_IMPORTED_MODULE_4_fable_core_List__["a" /* default */]()];
  } else if (msg.Case === "ChangeVisibility") {
    return [new Model(model.Entries, model.Field, model.Uid, msg.Fields[0]), new __WEBPACK_IMPORTED_MODULE_4_fable_core_List__["a" /* default */]()];
  } else {
    return [model, new __WEBPACK_IMPORTED_MODULE_4_fable_core_List__["a" /* default */]()];
  }
}
function onEnter(msg, dispatch) {
  return ["keydown", function (_arg1) {
    if (_arg1.keyCode === 13) {
      dispatch(msg);
    }
  }];
}
function viewInput(model, dispatch) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_snabbdom__["h"])("header", {
    props: {
      className: "header"
    }
  }, [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_snabbdom__["h"])("h1", {}, ["todos"]), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_snabbdom__["h"])("input", {
    props: {
      className: "new-todo",
      placeholder: "What needs to be done?",
      value: model,
      autoFocus: true
    },
    on: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_fable_core_Seq__["a" /* fold */])(function (o, kv) {
      o[kv[0]] = kv[1];
      return o;
    }, {}, [["input", function ($var6) {
      return dispatch(function ($var5) {
        return function (arg0_1) {
          return new Msg("UpdateField", [arg0_1]);
        }(function ($var4) {
          return function (value_1) {
            return value_1;
          }(function (ev_1) {
            return ev_1.target.value;
          }($var4));
        }($var5));
      }($var6));
    }], onEnter(new Msg("Add", []), dispatch)])
  })]);
}
function viewEntry(todo, dispatch) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_snabbdom__["h"])("li", {
    class: {
      completed: todo.Completed,
      editing: todo.Editing
    }
  }, [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_snabbdom__["h"])("div", {
    props: {
      className: "view"
    }
  }, [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_snabbdom__["h"])("input", {
    props: {
      className: "toggle",
      type: "checkbox",
      checked: todo.Completed
    },
    on: {
      input: function input(_arg1) {
        dispatch(new Msg("Check", [todo.Id, !todo.Completed]));
      }
    }
  }), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_snabbdom__["h"])("label", {
    on: {
      dblclick: function dblclick(_arg2) {
        dispatch(new Msg("EditingEntry", [todo.Id, true]));
      }
    }
  }, [todo.Description]), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_snabbdom__["h"])("button", {
    props: {
      className: "destroy"
    },
    on: {
      click: function click(_arg3) {
        dispatch(new Msg("Delete", [todo.Id]));
      }
    }
  }, [])]), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_snabbdom__["h"])("input", {
    props: {
      className: "edit",
      defaultValue: todo.Description,
      name: "title",
      id: "todo-" + String(todo.Id)
    },
    on: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_fable_core_Seq__["a" /* fold */])(function (o, kv) {
      o[kv[0]] = kv[1];
      return o;
    }, {}, [onEnter(new Msg("EditingEntry", [todo.Id, false]), dispatch), ["blur", function (_arg4_1) {
      dispatch(new Msg("EditingEntry", [todo.Id, false]));
    }], ["input", function (ev_1) {
      dispatch(new Msg("UpdateEntry", [todo.Id, ev_1.target.value]));
    }]])
  })]);
}
function viewEntries(visibility, entries, dispatch) {
  var isVisible = function isVisible(todo) {
    switch (visibility) {
      case "completed":
        return todo.Completed;

      case "active":
        return !todo.Completed;

      default:
        return true;
    }
  };

  var allCompleted = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_fable_core_Seq__["b" /* forAll */])(function (t) {
    return t.Completed;
  }, entries);
  var cssVisibility = entries.tail == null ? "hidden" : "visible";
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_snabbdom__["h"])("section", {
    props: {
      className: "main"
    },
    style: {
      visibility: cssVisibility
    }
  }, [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_snabbdom__["h"])("input", {
    props: {
      className: "toggle-all",
      type: "checkbox",
      name: "toggle",
      checked: allCompleted
    },
    on: {
      change: function change(_arg1) {
        dispatch(new Msg("CheckAll", [!allCompleted]));
      }
    }
  }), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_snabbdom__["h"])("label", {
    props: {
      htmlFor: "toggle-all"
    }
  }, ["Marl all as complete"]), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_snabbdom__["h"])("ul", {
    props: {
      className: "todo-list"
    }
  }, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_array_from___default()(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_fable_core_List__["d" /* map */])(function (i) {
    return viewEntry(i, dispatch);
  }, function (list) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_fable_core_List__["e" /* filter */])(isVisible, list);
  }(entries))))]);
}
function visibilitySwap(uri, visibility, actualVisibility, dispatch) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_snabbdom__["h"])("li", {
    on: {
      click: function click(_arg1) {
        dispatch(new Msg("ChangeVisibility", [visibility]));
      }
    }
  }, [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_snabbdom__["h"])("a", {
    props: {
      href: uri
    },
    class: {
      selected: visibility === actualVisibility
    }
  }, [visibility])]);
}
function viewControlsFilters(visibility, dispatch) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_snabbdom__["h"])("ul", {
    props: {
      className: "filters"
    }
  }, [visibilitySwap("#/", "all", visibility, dispatch), " ", visibilitySwap("#/active", "active", visibility, dispatch), " ", visibilitySwap("#/completed", "completed", visibility, dispatch)]);
}
function viewControlsCount(entriesLeft) {
  var item = entriesLeft === 1 ? " item" : " items";
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_snabbdom__["h"])("span", {
    props: {
      className: "todo-count"
    }
  }, [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_snabbdom__["h"])("strong", {}, [String(entriesLeft)]), item + " left"]);
}
function viewControlsClear(entriesCompleted, dispatch) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_snabbdom__["h"])("button", {
    props: {
      className: "clear-completed",
      hidden: entriesCompleted === 0
    },
    on: {
      click: function click(_arg1) {
        dispatch(new Msg("DeleteComplete", []));
      }
    }
  }, ["Clear completed (" + String(entriesCompleted) + ")"]);
}
function viewControls(visibility, entries, dispatch) {
  var entriesCompleted = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_fable_core_List__["e" /* filter */])(function (t) {
    return t.Completed;
  }, entries).length;
  var entriesLeft = entries.length - entriesCompleted;
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_snabbdom__["h"])("footer", {
    props: {
      className: "footer",
      hidden: entries.tail == null
    }
  }, [viewControlsCount(entriesLeft), viewControlsFilters(visibility, dispatch), viewControlsClear(entriesCompleted, dispatch)]);
}
var infoFooter = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_snabbdom__["h"])("footer", {
  props: {
    className: "info"
  }
}, [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_snabbdom__["h"])("p", {}, ["Double-click to edit a todo"]), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_snabbdom__["h"])("p", {}, ["Ported by ", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_snabbdom__["h"])("a", {
  props: {
    href: "https://github.com/MangelMaxime"
  }
}, ["Maxime Mangel"])]), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_snabbdom__["h"])("p", {}, ["Part of ", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_snabbdom__["h"])("a", {
  props: {
    href: "http://todomvc.com"
  }
}, ["TodoMVC"])])]);
function view(model, dispatch) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_snabbdom__["h"])("div", {
    props: {
      className: "todomvc-wrapper"
    }
  }, [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_snabbdom__["h"])("section", {
    props: {
      className: "todoapp"
    }
  }, [viewInput(model.Field, dispatch), viewEntries(model.Visibility, model.Entries, dispatch), viewControls(model.Visibility, model.Entries, dispatch), infoFooter])]);
}
__WEBPACK_IMPORTED_MODULE_8__node_modules_fable_elmish_elmish__["a" /* ProgramModule */].run(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__node_modules_fable_elmish_snabbdom_snabbdom__["a" /* withSnabbdom */])("todoapp", __WEBPACK_IMPORTED_MODULE_8__node_modules_fable_elmish_elmish__["a" /* ProgramModule */].mkProgram(function () {
  return init(null);
}, function (msg) {
  return function (model) {
    return update(msg, model);
  };
}, function (model_1) {
  return function (dispatch) {
    return view(model_1, dispatch);
  };
})));

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map