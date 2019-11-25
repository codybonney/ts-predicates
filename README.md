## ts-predicates

[![Build Status](https://travis-ci.com/codybonney/ts-predicates.svg?branch=master)](https://travis-ci.com/codybonney/ts-predicates)
[![Coverage Status](https://coveralls.io/repos/github/codybonney/ts-predicates/badge.svg?branch=master)](https://coveralls.io/github/codybonney/ts-predicates?branch=master)
[![npm version](http://img.shields.io/npm/v/ts-predicates.svg?style=flat)](https://npmjs.org/package/ts-predicates "View this project on npm")

### Description:
A collection of predicate functions and utilities for creating new predicate functions in TypeScript. JavaScript UMD and TypeScript declaration file will be generated when building the package.

### Installation:
```
npm install ts-predicates
```

### Usage:
```javascript
import { 
    isBoolean,
    isNotBoolean,
    isString,
    isNotString,
    isNumber,
    isNotNumber,
    isDefined,
    isUndefined,
    isNull,
    isNotNull,
    isObject,
    isNotObject,
    isPlainObject,
    isNotPlainObject,
    isArray,
    isNotArray,
    isEmptyArray,
    isNonEmptyArray,
    isFunction,
    isNotFunction,
    isTrue,
    isFalse,
    isTruthy,
    isFalsy,
    isDate,
    isNotDate,
    isRegExp,
    isNotRegExp,
    isSymbol,
    isNotSymbol,
    isEqual,
    isNotEqual
 } from 'ts-predicates';

// ...

isBoolean({})                  // false
isNotBoolean({})               // true
isString('foo')                // true
isNotString('foo')             // false
isNumber(5)                    // true
isNotNumber('foo')             // true
isDefined([])                  // true
isUndefined({})                // false
isNull(null)                   // true
isNotNull(null)                // false
isObject({})                   // true
isNotObject({})                // false
isPlainObject(new Array())     // false
isNotPlainObject(new Date())   // true
isArray([])                    // true
isNotArray([])                 // false
isEmptyArray([])               // true
isNonEmptyArray([])            // false
isFunction(() => {})           // true
isNotFunction(() => {})        // false
isTrue(1)                      // false
isFalse(false)                 // true
isTruthy(1)                    // true
isFalsy(0)                     // true
isDate(new Date())             // true
isNotDate(new Date())          // false
isRegExp(new RegExp(''))       // true
isNotRegExp(new RegExp(''))    // false
isSymbol(Symbol())             // true
isNotSymbol(Symbol())          // false
isEqual(1)(1)                  // true
isNotEqual({a: 1})({})         // true
```
