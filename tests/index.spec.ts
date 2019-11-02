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

/**
 * Utility function for generating test cases for a given set of inputs
 */
const returns = expectedOutput => testFunction => (...testInputs) => {
    testInputs.forEach(testInput => {
        it(`should return ${expectedOutput} for ${typeOf(testInput)} values`, () => {
            expect(testFunction(testInput)).toBe(expectedOutput);
        });
    });
};
const expectTrue = returns(true);
const expectFalse = returns(false);

// utility functions that each return an array of values
const objects   = () => [{}, {'foo': 'bar'}];
const arrays    = () => [[], [1,2,3]];
const functions = () => [()=>{}];
const strings   = () => ['foo', ''];
const numbers   = () => [1];
const booleans  = () => [true, false];

describe("boolean", () => {
    expectTrue(isBoolean)(
        ...booleans()
    );
    expectFalse(isBoolean)(
        ...objects(),
        ...arrays(),
        ...functions(),
        ...strings(),
        ...numbers(),
        undefined,
        null
    );
});

describe("isString", () => {
    expectTrue(isString)(
        ...strings()
    );
    expectFalse(isString)(
        ...objects(),
        ...arrays(),
        ...functions(),
        ...booleans(),
        ...numbers(),
        undefined,
        null
    );
});

describe("isUndefined", () => {
    expectTrue(isUndefined)(
        undefined
    );
    expectFalse(isUndefined)(
        ...strings(),
        ...objects(),
        ...arrays(),
        ...functions(),
        ...strings(),
        ...numbers(),
        null
    );
});

describe("isDefined", () => {
    expectTrue(isDefined)(
        ...strings(),
        ...objects(),
        ...arrays(),
        ...functions(),
        ...strings(),
        ...numbers(),
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
        ...strings(),
        ...objects(),
        ...arrays(),
        ...functions(),
        ...strings(),
        ...numbers(),
        undefined
    );
});

describe("isObject", () => {
    expectTrue(isObject)(
        ...objects()
    );
    expectFalse(isObject)(
        ...strings(),
        ...arrays(),
        ...functions(),
        ...strings(),
        ...numbers(),
        undefined,
        null
    );
});

describe("isArray", () => {
    expectTrue(isArray)(
        ...arrays()
    );
    expectFalse(isArray)(
        ...strings(),
        ...objects(),
        ...functions(),
        ...strings(),
        ...numbers(),
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
        ...strings(),
        ...objects(),
        ...functions(),
        ...strings(),
        ...numbers(),
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
        ...strings(),
        ...objects(),
        ...functions(),
        ...strings(),
        ...numbers(),
        undefined,
        null
    );
});

describe("isFunction", () => {
    expectTrue(isFunction)(
        ...functions(),
    );
    expectFalse(isFunction)(
        ...arrays(),
        ...strings(),
        ...objects(),
        ...strings(),
        ...numbers(),
        undefined,
        null
    );
});

describe("isNotFunction", () => {
    expectTrue(isNotFunction)(
        ...arrays(),
        ...strings(),
        ...objects(),
        ...strings(),
        ...numbers(),
        undefined,
        null
    );
    expectFalse(isNotFunction)(
        ...functions()
    );
});
