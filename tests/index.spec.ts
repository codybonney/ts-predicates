import 'jasmine';
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
    isFunction
} from '../src';

describe("boolean", () => {
    it("should return true for a boolean value", () => {
        expect(isBoolean(true)).toBe(true);
    });

    it("should return false for an object value", () => {
        expect(isBoolean({})).toBe(false);
        expect(isBoolean({a: 1})).toBe(false);
    });

    it("should return false for an array value", () => {
        expect(isBoolean([])).toBe(false);
        expect(isBoolean([1,2,3])).toBe(false);
    });

    it("should return false for a function value", () => {
        expect(isBoolean(() => {})).toBe(false);
    });

    it("should return false for a string value", () => {
        expect(isBoolean('true')).toBe(false);
    });

    it("should return false for a number value", () => {
        expect(isBoolean(1)).toBe(false);
    });

    it("should return false for an undefined value", () => {
        expect(isBoolean(undefined)).toBe(false);
    });

    it("should return false for a null value", () => {
        expect(isBoolean(null)).toBe(false);
    });
});

describe("string", () => {
    it("should return true for a string value", () => {
        expect(isString('test')).toBe(true);
    });

    it("should return false for an array value", () => {
        expect(isString([])).toBe(false);
        expect(isString([1,2,3])).toBe(false);
    });

    it("should return false for a function value", () => {
        expect(isString(() => {})).toBe(false);
    });

    it("should return false for an object value", () => {
        expect(isString({})).toBe(false);
        expect(isString({a: 1})).toBe(false);
    });

    it("should return false for a number value", () => {
        expect(isString(1)).toBe(false);
    });

    it("should return false for a boolean value", () => {
        expect(isString(true)).toBe(false);
    });

    it("should return false for an undefined value", () => {
        expect(isString(undefined)).toBe(false);
    });

    it("should return false for a null value", () => {
        expect(isString(null)).toBe(false);
    });
});

describe("isUndefined", () => {
    it("should return true for an undefined value", () => {
        expect(isUndefined(undefined)).toBe(true);
    });

    it("should return false for an object value", () => {
        expect(isUndefined({})).toBe(false);
        expect(isUndefined({a: 1})).toBe(false);
    });

    it("should return false for an array value", () => {
        expect(isUndefined([])).toBe(false);
        expect(isUndefined([1,2,3])).toBe(false);
    });

    it("should return false for a function value", () => {
        expect(isUndefined(() => {})).toBe(false);
    });

    it("should return false for a string value", () => {
        expect(isUndefined('test')).toBe(false);
    });

    it("should return false for a number value", () => {
        expect(isUndefined(1)).toBe(false);
    });

    it("should return false for a boolean value", () => {
        expect(isUndefined(true)).toBe(false);
    });

    it("should return false for a null value", () => {
        expect(isUndefined(null)).toBe(false);
    });
});

describe("isDefined", () => {
    it("should return false for an undefined value", () => {
        expect(isDefined(undefined)).toBe(false);
    });

    it("should return true for an object value", () => {
        expect(isDefined({})).toBe(true);
        expect(isDefined({a: 1})).toBe(true);
    });

    it("should return true for an array value", () => {
        expect(isDefined([])).toBe(true);
        expect(isDefined([1,2,3])).toBe(true);
    });

    it("should return true for a function value", () => {
        expect(isDefined(() => {})).toBe(true);
    });

    it("should return true for a string value", () => {
        expect(isDefined('test')).toBe(true);
    });

    it("should return true for a number value", () => {
        expect(isDefined(1)).toBe(true);
    });

    it("should return true for a boolean value", () => {
        expect(isDefined(true)).toBe(true);
    });

    it("should return true for a null value", () => {
        expect(isDefined(null)).toBe(true);
    });
});

describe("isNull", () => {
    it("should return true for a null value", () => {
        expect(isNull(null)).toBe(true);
    });

    it("should return false for an array value", () => {
        expect(isNull([])).toBe(false);
        expect(isNull([1,2,3])).toBe(false);
    });

    it("should return false for a function value", () => {
        expect(isNull(() => {})).toBe(false);
    });

    it("should return false for an object value", () => {
        expect(isNull({})).toBe(false);
        expect(isNull({a: 1})).toBe(false);
    });

    it("should return false for a string value", () => {
        expect(isNull('test')).toBe(false);
    });

    it("should return false for a number value", () => {
        expect(isNull(0)).toBe(false);
    });

    it("should return false for a boolean value", () => {
        expect(isNull(true)).toBe(false);
    });

    it("should return false for an undefined value", () => {
        expect(isNull(undefined)).toBe(false);
    });
});

describe("isObject", () => {
    it("should return true for an object value", () => {
        expect(isObject({})).toBe(true);
        expect(isObject({a: 1})).toBe(true);
    });

    it("should return false for an array value", () => {
        expect(isObject([])).toBe(false);
        expect(isObject([1,2,3])).toBe(false);
    });

    it("should return false for a function value", () => {
        expect(isObject(() => {})).toBe(false);
    });

    it("should return false for a null value", () => {
        expect(isObject(null)).toBe(false);
    });

    it("should return false for a string value", () => {
        expect(isObject('test')).toBe(false);
    });

    it("should return false for a number value", () => {
        expect(isObject(0)).toBe(false);
    });

    it("should return false for a boolean value", () => {
        expect(isObject(true)).toBe(false);
    });

    it("should return false for an undefined value", () => {
        expect(isObject(undefined)).toBe(false);
    });
});

describe("isArray", () => {
    it("should return true for an array value", () => {
        expect(isArray([])).toBe(true);
        expect(isArray([1,2,3])).toBe(true);
    });

    it("should return false for a function value", () => {
        expect(isArray(() => {})).toBe(false);
    });

    it("should return false for a null value", () => {
        expect(isArray(null)).toBe(false);
    });

    it("should return false for a string value", () => {
        expect(isArray('test')).toBe(false);
    });

    it("should return false for a number value", () => {
        expect(isArray(0)).toBe(false);
    });

    it("should return false for a boolean value", () => {
        expect(isArray(true)).toBe(false);
    });

    it("should return false for an undefined value", () => {
        expect(isArray(undefined)).toBe(false);
    });
});

describe("isEmptyArray", () => {
    it("should return true for an empty array value", () => {
        expect(isEmptyArray([])).toBe(true);
    });

    it("should return false for a function value", () => {
        expect(isEmptyArray(() => {})).toBe(false);
    });

    it("should return false for a non-empty array value", () => {
        expect(isEmptyArray([1,2,3])).toBe(false);
    });

    it("should return false for a null value", () => {
        expect(isEmptyArray(null)).toBe(false);
    });

    it("should return false for a string value", () => {
        expect(isEmptyArray('test')).toBe(false);
    });

    it("should return false for a number value", () => {
        expect(isEmptyArray(0)).toBe(false);
    });

    it("should return false for a boolean value", () => {
        expect(isEmptyArray(true)).toBe(false);
    });

    it("should return false for an undefined value", () => {
        expect(isEmptyArray(undefined)).toBe(false);
    });
});

describe("isNonEmptyArray", () => {
    it("should return true for a non-empty array value", () => {
        expect(isNonEmptyArray([1,2,3])).toBe(true);
    });

    it("should return false for a function value", () => {
        expect(isNonEmptyArray(() => {})).toBe(false);
    });

    it("should return false for an empty array value", () => {
        expect(isNonEmptyArray([])).toBe(false);
    });

    it("should return false for a null value", () => {
        expect(isNonEmptyArray(null)).toBe(false);
    });

    it("should return false for a string value", () => {
        expect(isNonEmptyArray('test')).toBe(false);
    });

    it("should return false for a number value", () => {
        expect(isNonEmptyArray(0)).toBe(false);
    });

    it("should return false for a boolean value", () => {
        expect(isNonEmptyArray(true)).toBe(false);
    });

    it("should return false for an undefined value", () => {
        expect(isNonEmptyArray(undefined)).toBe(false);
    });
});

describe("isFunction", () => {
    it("should return true for a function value", () => {
        expect(isFunction(() => {})).toBe(true);
    });

    it("should return false for an array value", () => {
        expect(isFunction([])).toBe(false);
        expect(isFunction([1,2,3])).toBe(false);
    });

    it("should return false for a null value", () => {
        expect(isFunction(null)).toBe(false);
    });

    it("should return false for a string value", () => {
        expect(isFunction('test')).toBe(false);
    });

    it("should return false for a number value", () => {
        expect(isFunction(0)).toBe(false);
    });

    it("should return false for a boolean value", () => {
        expect(isFunction(true)).toBe(false);
    });

    it("should return false for an undefined value", () => {
        expect(isFunction(undefined)).toBe(false);
    });
});
