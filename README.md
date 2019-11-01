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
```
import { 
    isString, 
    isBoolean, 
    isDefined, 
    isUndefined, 
    isNull, 
    isObject,
    isArray,
    isEmptyArray,
    isNonEmptyArray,
    isFunction,
    isNotFunction
 } from 'ts-predicates';

...

isString('foo')          // true
isBoolean({})            // false
isDefined([])            // true
isUndefined({})          // false
isNull(null)             // true
isObject({})             // true
isArray([])              // true
isEmptyArray([])         // true
isNonEmptyArray([])      // false
isFunction(() => {})     // true
isNotFunction(() => {})  // false
```
