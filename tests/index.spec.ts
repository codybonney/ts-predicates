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
} from '../src';

// arrays of values to be used as test case inputs
const emptyFunction = () => {};
const objects       = [{}, {'foo': 'bar'}];
const arrays        = [[], [1,2,3], new Array()];
const functions     = [emptyFunction];
const strings       = ['foo', ''];
const numbers       = [1, 3.14];
const booleans      = [true, false];

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
        new Date(),
        new RegExp(/foo/),
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
        new Date(),
        new RegExp(/foo/),
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
        new Date(),
        new RegExp(/foo/),
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
        new Date(),
        new RegExp(/foo/),
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
        ...booleans,
        new Date(),
        new RegExp(/foo/),
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
        ...booleans,
        new Date(),
        new RegExp(/foo/),
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
        ...booleans,
        new Date(),
        new RegExp(/foo/),
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
        ...booleans,
        new Date(),
        new RegExp(/foo/),
        undefined
    );
});

describe('isObject', () => {
    expects(true)(isObject)(
        ...objects,
        new Date(),
        new RegExp('')
    );
    expects(false)(isObject)(
        ...strings,
        ...arrays,
        ...functions,
        ...numbers,
        ...booleans,
        undefined,
        null
    );
});

describe('isNotObject', () => {
    expects(false)(isNotObject)(
        ...objects,
        new Date(),
        new RegExp(/foo/)
    );
    expects(true)(isNotObject)(
        ...strings,
        ...arrays,
        ...functions,
        ...numbers,
        ...booleans,
        undefined,
        null
    );
});

describe('isPlainObject', () => {
    expects(true)(isPlainObject)(...objects);
    expects(false)(isPlainObject)(
        ...strings,
        ...arrays,
        ...functions,
        ...numbers,
        ...booleans,
        undefined,
        new Date(),
        new RegExp(/foo/),
        null
    );
});

describe('isNotPlainObject', () => {
    expects(false)(isNotPlainObject)(...objects);
    expects(true)(isNotPlainObject)(
        ...strings,
        ...arrays,
        ...functions,
        ...numbers,
        ...booleans,
        undefined,
        new Date(),
        new RegExp(/foo/),
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
        ...booleans,
        new Date(),
        new RegExp(/foo/),
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
        ...booleans,
        new Date(),
        new RegExp(/foo/),
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
        ...booleans,
        new Date(),
        new RegExp(/foo/),
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
        ...booleans,
        new Date(),
        new RegExp(/foo/),
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
        ...booleans,
        new Date(),
        new RegExp(/foo/),
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
        ...booleans,
        new Date(),
        new RegExp(/foo/),
        undefined,
        null
    );
});

describe('isTrue', () => {
    expects(true)(isTrue)(true);
    expects(false)(isTrue)(
        ...arrays,
        ...strings,
        ...objects,
        ...numbers,
        new Date(),
        new RegExp(/foo/),
        undefined,
        null,
        false
    );
});

describe('isFalse', () => {
    expects(true)(isFalse)(false);
    expects(false)(isFalse)(
        ...arrays,
        ...strings,
        ...objects,
        ...numbers,
        new Date(),
        new RegExp(/foo/),
        undefined,
        null,
        true
    );
});

describe('isTruthy', () => {
    expects(true)(isTruthy)(
        {},
        true,
        1,
        'string'
    );
    expects(false)(isTruthy)(
        '',
        0,
        undefined,
        null,
        false
    );
});

describe('isFalsy', () => {
    expects(false)(isFalsy)(
        true,
        1,
        'string',
        {}
    );
    expects(true)(isFalsy)(
        '',
        0,
        undefined,
        null,
        false
    );
});

describe('isDate', () => {
    expects(true)(isDate)(new Date());
    expects(false)(isDate)(
        ...arrays,
        ...strings,
        ...objects,
        ...functions,
        ...booleans,
        ...numbers,
        new RegExp(/foo/),
        undefined,
        null
    );
});

describe('isNotDate', () => {
    expects(false)(isNotDate)(new Date());
    expects(true)(isNotDate)(
        ...arrays,
        ...strings,
        ...objects,
        ...functions,
        ...booleans,
        ...numbers,
        new RegExp(/foo/),
        undefined,
        null
    );
});

describe('isRegExp', () => {
    expects(true)(isRegExp)(new RegExp(''));
    expects(false)(isRegExp)(
        ...arrays,
        ...strings,
        ...objects,
        ...functions,
        ...booleans,
        ...numbers,
        new Date(),
        undefined,
        null
    );
});

describe('isNotRegExp', () => {
    expects(false)(isNotRegExp)(new RegExp(''));
    expects(true)(isNotRegExp)(
        ...arrays,
        ...strings,
        ...objects,
        ...functions,
        ...booleans,
        ...numbers,
        new Date(),
        undefined,
        null
    );
});

describe('isSymbol', () => {
    expects(true)(isSymbol)(Symbol());
    expects(false)(isSymbol)(
        ...arrays,
        ...strings,
        ...objects,
        ...functions,
        ...booleans,
        ...numbers,
        new RegExp(''),
        new Date(),
        undefined,
        null
    );
});

describe('isNotSymbol', () => {
    expects(false)(isNotSymbol)(Symbol());
    expects(true)(isNotSymbol)(
        ...arrays,
        ...strings,
        ...objects,
        ...functions,
        ...booleans,
        ...numbers,
        new RegExp(''),
        new Date(),
        undefined,
        null
    );
});

describe('isEqual', () => {
    expects(true)(isEqual(0))(-0);
    expects(true)(isEqual(1))(1);
    expects(true)(isEqual('1'))('1');
    expects(true)(isEqual([]))([]);
    expects(true)(isEqual([{}, {a: 1}]))([{}, {a: 1}]);
    expects(true)(isEqual([1,2,3]))([1,2,3]);
    expects(true)(isEqual({}))({});
    expects(true)(isEqual({a: 1, b: 2}))({a: 1, b: 2}, {b: 2, a: 1});
    expects(true)(isEqual({a: [ { foo: 'bar' }]}))({a: [ { foo: 'bar' }]});
    expects(true)(isEqual(null))(null);
    expects(true)(isEqual(true))(true);
    expects(true)(isEqual(false))(false);
    expects(true)(isEqual(NaN))(NaN);
    expects(true)(isEqual(Infinity))(Infinity);
    expects(true)(isEqual(new Date('Mon Nov 04 2019 11:00:00 GMT-0700')))(new Date('Mon Nov 04 2019 11:00:00 GMT-0700'));
    expects(true)(isEqual(/foo/))(/foo/);
    expects(true)(isEqual(emptyFunction))(emptyFunction);
    expects(true)(isEqual({
        a: 'a',
        b: [ { a: 1 } ],
        c: 'c',
        d: {
            a2: 'a2',
            b2: {
                a3: 'a3',
                b3: [1, '2', { a: 1, b: [ 1 ] }, 4, 5],
                c3: { a: 1 }
            }
        },
        e: 1,
        f: new Date(2019, 11),
        g: new RegExp(/foo/)
    }))({
        g: new RegExp(/foo/),
        c: 'c',
        f: new Date(2019, 11),
        b: [ { a: 1 } ],
        e: 1,
        a: 'a',
        d: {
            b2: {
                b3: [1, '2', { a: 1, b: [ 1 ] }, 4, 5],
                c3: { a: 1 },
                a3: 'a3'
            },
            a2: 'a2'
        },
    });

    expects(false)(isEqual(0))(null, false);
    expects(false)(isEqual(1))(2, true, []);
    expects(false)(isEqual([]))({});
    expects(false)(isEqual([1, 2]))([1, 2, 3]);
    expects(false)(isEqual([{}, {a: 1}]))([{}, {a: 2}]);
    expects(false)(isEqual([1, 2, 3]))([1, 2, 4]);
    expects(false)(isEqual({a: 1, b: '2'}))({a: 1, b: '2', c: '3'}, {a: 1, c: '2'});
    expects(false)(isEqual({a: [ { foo: 'bar' }]}))({a: [ { bar: 'foo' }]});
    expects(false)(isEqual({a: undefined}))({});
    expects(false)(isEqual({'0': 0, '1': 1, '2': 2, length: 3}))([0, 1, 2]);
    expects(false)(isEqual({}))({ a: undefined });
    expects(false)(isEqual({ a: undefined }))({ b: undefined });
    expects(false)(isEqual(''))(null);
    expects(false)(isEqual('foo'))('bar');
    expects(false)(isEqual(null))(false, {}, undefined, []);
    expects(false)(isEqual(undefined))({}, null, []);
    expects(false)(isEqual(true))(false, {}, undefined, []);
    expects(false)(isEqual(false))(true);
    expects(false)(isEqual(Infinity))(-Infinity);
    expects(false)(isEqual(new Date('Mon Nov 04 2019 11:00:00 GMT-0700')))(new Date('Mon Nov 04 2019 12:00:00 GMT-0700'));
    expects(false)(isEqual(new Date('Mon Nov 04 2019 11:00:00 GMT-0700')))('Mon Nov 04 2019 11:00:00 GMT-0700', {});
    expects(false)(isEqual(/foo/))(/bar/, /foo/i, 'foo', {});
    expects(false)(isEqual(emptyFunction))(()=>{});
});

describe('isNotEqual', () => {
    expects(false)(isNotEqual(0))(-0);
    expects(false)(isNotEqual(1))(1);
    expects(false)(isNotEqual('1'))('1');
    expects(false)(isNotEqual([]))([]);
    expects(false)(isNotEqual([{}, {a: 1}]))([{}, {a: 1}]);
    expects(false)(isNotEqual([1,2,3]))([1,2,3]);
    expects(false)(isNotEqual({}))({});
    expects(false)(isNotEqual({a: 1, b: 2}))({a: 1, b: 2}, {b: 2, a: 1});
    expects(false)(isNotEqual({a: [ { foo: 'bar' }]}))({a: [ { foo: 'bar' }]});
    expects(false)(isNotEqual(null))(null);
    expects(false)(isNotEqual(true))(true);
    expects(false)(isNotEqual(false))(false);
    expects(false)(isNotEqual(NaN))(NaN);
    expects(false)(isNotEqual(Infinity))(Infinity);
    expects(false)(isNotEqual(new Date('Mon Nov 04 2019 11:00:00 GMT-0700')))(new Date('Mon Nov 04 2019 11:00:00 GMT-0700'));
    expects(false)(isNotEqual(/foo/))(/foo/);
    expects(false)(isNotEqual(emptyFunction))(emptyFunction);
    expects(false)(isNotEqual({
        a: 'a',
        b: [ { a: 1 } ],
        c: 'c',
        d: {
            a2: 'a2',
            b2: {
                a3: 'a3',
                b3: [1, '2', { a: 1, b: [ 1 ] }, 4, 5],
                c3: { a: 1 }
            }
        },
        e: 1,
        f: new Date(2019, 11),
        g: new RegExp(/foo/)
    }))({
        g: new RegExp(/foo/),
        c: 'c',
        f: new Date(2019, 11),
        b: [ { a: 1 } ],
        e: 1,
        a: 'a',
        d: {
            b2: {
                b3: [1, '2', { a: 1, b: [ 1 ] }, 4, 5],
                c3: { a: 1 },
                a3: 'a3'
            },
            a2: 'a2'
        },
    });

    expects(true)(isNotEqual(0))(null, false);
    expects(true)(isNotEqual(1))(2, true, []);
    expects(true)(isNotEqual([]))({});
    expects(true)(isNotEqual([1, 2]))([1, 2, 3]);
    expects(true)(isNotEqual([{}, {a: 1}]))([{}, {a: 2}]);
    expects(true)(isNotEqual([1, 2, 3]))([1, 2, 4]);
    expects(true)(isNotEqual({a: 1, b: '2'}))({a: 1, b: '2', c: '3'}, {a: 1, c: '2'});
    expects(true)(isNotEqual({a: [ { foo: 'bar' }]}))({a: [ { bar: 'foo' }]});
    expects(true)(isNotEqual({a: undefined}))({});
    expects(true)(isNotEqual({'0': 0, '1': 1, '2': 2, length: 3}))([0, 1, 2]);
    expects(true)(isNotEqual({}))({ a: undefined });
    expects(true)(isNotEqual({ a: undefined }))({ b: undefined });
    expects(true)(isNotEqual(''))(null);
    expects(true)(isNotEqual('foo'))('bar');
    expects(true)(isNotEqual(null))(false, {}, undefined, []);
    expects(true)(isNotEqual(undefined))({}, null, []);
    expects(true)(isNotEqual(true))(false, {}, undefined, []);
    expects(true)(isNotEqual(false))(true);
    expects(true)(isNotEqual(Infinity))(-Infinity);
    expects(true)(isNotEqual(new Date('Mon Nov 04 2019 11:00:00 GMT-0700')))(new Date('Mon Nov 04 2019 12:00:00 GMT-0700'));
    expects(true)(isNotEqual(new Date('Mon Nov 04 2019 11:00:00 GMT-0700')))('Mon Nov 04 2019 11:00:00 GMT-0700', {});
    expects(true)(isNotEqual(/foo/))(/bar/, /foo/i, 'foo', {});
    expects(true)(isNotEqual(emptyFunction))(()=>{});
});
