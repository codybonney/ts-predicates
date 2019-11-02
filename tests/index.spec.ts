import 'jasmine';
import typeOf from 'typeof-util';
import {
    isBoolean,
    isNotBoolean,
    isString,
    isNotString,
    isDefined,
    isUndefined,
    isNull,
    isNotNull,
    isObject,
    isNotObject,
    isArray,
    isNotArray,
    isEmptyArray,
    isNonEmptyArray,
    isFunction,
    isNotFunction
} from '../src';

// arrays of values to be used as test case inputs
const objects   = [{}, {'foo': 'bar'}];
const arrays    = [[], [1,2,3]];
const functions = [() => {}];
const strings   = ['foo', ''];
const numbers   = [1, 3.14];
const booleans  = [true, false];

// utility for generating test cases
const expects = expectedOutput => testFunction => (...testInputs) => {
    testInputs.forEach(testInput => {
        it(`should return ${expectedOutput} for ${typeOf(testInput)} values`, () => {
            expect(testFunction(testInput)).toBe(expectedOutput);
        });
    });
};

describe('isBoolean', () => {
    expects(true)(isBoolean)(...booleans);
    expects(false)(isBoolean)(
        ...objects,
        ...arrays,
        ...functions,
        ...strings,
        ...numbers,
        undefined,
        null
    );
});

describe('isNotBoolean', () => {
    expects(false)(isNotBoolean)(...booleans);
    expects(true)(isNotBoolean)(
        ...objects,
        ...arrays,
        ...functions,
        ...strings,
        ...numbers,
        undefined,
        null
    );
});

describe('isString', () => {
    expects(true)(isString)(...strings);
    expects(false)(isString)(
        ...objects,
        ...arrays,
        ...functions,
        ...booleans,
        ...numbers,
        undefined,
        null
    );
});

describe('isNotString', () => {
    expects(false)(isNotString)(...strings);
    expects(true)(isNotString)(
        ...objects,
        ...arrays,
        ...functions,
        ...booleans,
        ...numbers,
        undefined,
        null
    );
});

describe('isDefined', () => {
    expects(true)(isDefined)(
        ...strings,
        ...objects,
        ...arrays,
        ...functions,
        ...numbers,
        null
    );
    expects(false)(isDefined)(undefined);
});

describe('isUndefined', () => {
    expects(true)(isUndefined)(undefined);
    expects(false)(isUndefined)(
        ...strings,
        ...objects,
        ...arrays,
        ...functions,
        ...numbers,
        null
    );
});

describe('isNull', () => {
    expects(true)(isNull)(null);
    expects(false)(isNull)(
        ...strings,
        ...objects,
        ...arrays,
        ...functions,
        ...numbers,
        undefined
    );
});

describe('isNotNull', () => {
    expects(false)(isNotNull)(null);
    expects(true)(isNotNull)(
        ...strings,
        ...objects,
        ...arrays,
        ...functions,
        ...numbers,
        undefined
    );
});

describe('isObject', () => {
    expects(true)(isObject)(...objects);
    expects(false)(isObject)(
        ...strings,
        ...arrays,
        ...functions,
        ...numbers,
        undefined,
        null
    );
});

describe('isNotObject', () => {
    expects(false)(isNotObject)(...objects);
    expects(true)(isNotObject)(
        ...strings,
        ...arrays,
        ...functions,
        ...numbers,
        undefined,
        null
    );
});

describe('isArray', () => {
    expects(true)(isArray)(...arrays);
    expects(false)(isArray)(
        ...strings,
        ...objects,
        ...functions,
        ...numbers,
        undefined,
        null
    );
});

describe('isNotArray', () => {
    expects(false)(isNotArray)(...arrays);
    expects(true)(isNotArray)(
        ...strings,
        ...objects,
        ...functions,
        ...numbers,
        undefined,
        null
    );
});

describe('isEmptyArray', () => {
    expects(true)(isEmptyArray)([]);
    expects(false)(isEmptyArray)(
        [1],
        ...strings,
        ...objects,
        ...functions,
        ...numbers,
        undefined,
        null
    );
});

describe('isNonEmptyArray', () => {
    expects(true)(isNonEmptyArray)([1]);
    expects(false)(isNonEmptyArray)(
        [],
        ...strings,
        ...objects,
        ...functions,
        ...numbers,
        undefined,
        null
    );
});

describe('isFunction', () => {
    expects(true)(isFunction)(...functions);
    expects(false)(isFunction)(
        ...arrays,
        ...strings,
        ...objects,
        ...numbers,
        undefined,
        null
    );
});

describe('isNotFunction', () => {
    expects(false)(isNotFunction)(...functions);
    expects(true)(isNotFunction)(
        ...arrays,
        ...strings,
        ...objects,
        ...numbers,
        undefined,
        null
    );
});
