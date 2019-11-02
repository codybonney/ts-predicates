import 'jasmine';
import typeOf from 'typeof-util';
import {
    isString,
    isBoolean,
    isDefined,
    isNull,
    isUndefined,
    isObject,
    isArray,
    isEmptyArray,
    isNonEmptyArray,
    isFunction,
    isNotFunction
} from '../src';

// arrays of values to be used as test inputs
const objects   = [{}, {'foo': 'bar'}];
const arrays    = [[], [1,2,3]];
const functions = [()=>{}];
const strings   = ['foo', ''];
const numbers   = [1, 3.14];
const booleans  = [true, false];

// utility functions for generating test cases
const tests = expectedOutput => testFunction => (...testInputs) => {
    testInputs.forEach(testInput => {
        it(`should return ${expectedOutput} for ${typeOf(testInput)} values`, () => {
            expect(testFunction(testInput)).toBe(expectedOutput);
        });
    });
};
const expectTrue = tests(true);
const expectFalse = tests(false);

describe("boolean", () => {
    expectTrue(isBoolean)(
        ...booleans
    );
    expectFalse(isBoolean)(
        ...objects,
        ...arrays,
        ...functions,
        ...strings,
        ...numbers,
        undefined,
        null
    );
});

describe("isString", () => {
    expectTrue(isString)(
        ...strings
    );
    expectFalse(isString)(
        ...objects,
        ...arrays,
        ...functions,
        ...booleans,
        ...numbers,
        undefined,
        null
    );
});

describe("isUndefined", () => {
    expectTrue(isUndefined)(
        undefined
    );
    expectFalse(isUndefined)(
        ...strings,
        ...objects,
        ...arrays,
        ...functions,
        ...numbers,
        null
    );
});

describe("isDefined", () => {
    expectTrue(isDefined)(
        ...strings,
        ...objects,
        ...arrays,
        ...functions,
        ...numbers,
        null
    );
    expectFalse(isDefined)(
        undefined
    );
});

describe("isNull", () => {
    expectTrue(isNull)(
        null
    );
    expectFalse(isNull)(
        ...strings,
        ...objects,
        ...arrays,
        ...functions,
        ...numbers,
        undefined
    );
});

describe("isObject", () => {
    expectTrue(isObject)(
        ...objects
    );
    expectFalse(isObject)(
        ...strings,
        ...arrays,
        ...functions,
        ...numbers,
        undefined,
        null
    );
});

describe("isArray", () => {
    expectTrue(isArray)(
        ...arrays
    );
    expectFalse(isArray)(
        ...strings,
        ...objects,
        ...functions,
        ...numbers,
        undefined,
        null
    );
});

describe("isEmptyArray", () => {
    expectTrue(isEmptyArray)(
        []
    );
    expectFalse(isEmptyArray)(
        [1],
        ...strings,
        ...objects,
        ...functions,
        ...numbers,
        undefined,
        null
    );
});

describe("isNonEmptyArray", () => {
    expectTrue(isNonEmptyArray)(
        [1]
    );
    expectFalse(isNonEmptyArray)(
        [],
        ...strings,
        ...objects,
        ...functions,
        ...numbers,
        undefined,
        null
    );
});

describe("isFunction", () => {
    expectTrue(isFunction)(
        ...functions,
    );
    expectFalse(isFunction)(
        ...arrays,
        ...strings,
        ...objects,
        ...numbers,
        undefined,
        null
    );
});

describe("isNotFunction", () => {
    expectTrue(isNotFunction)(
        ...arrays,
        ...strings,
        ...objects,
        ...numbers,
        undefined,
        null
    );
    expectFalse(isNotFunction)(
        ...functions
    );
});
