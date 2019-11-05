import typeOf from 'typeof-util';

/**
 * return true if a given value is of type boolean
 *
 * examples:
 * isBoolean(true)  // true
 * isBoolean(false) // true
 * isBoolean('no')  // false
 */
export const isBoolean = value => typeOf(value) === 'boolean';

/**
 * return true if a given value is not of type boolean
 *
 * examples:
 * isNotBoolean(true)  // false
 * isNotBoolean(false) // false
 * isNotBoolean('no')  // true
 */
export const isNotBoolean = value => typeOf(value) !== 'boolean';


/**
 * return true if a given value is of type string
 *
 * examples:
 * isString(5)     // false
 * isString('yes') // true
 */
export const isString = value => typeOf(value) === 'string';

/**
 * return true if a given value is not of type string
 *
 * examples:
 * isNotString(5)     // true
 * isNotString('yes') // false
 */
export const isNotString = value => typeOf(value) !== 'string';

/**
 * return true if a given value is not of type undefined
 *
 * examples:
 * isDefined(0)         // true
 * isDefined(undefined) // false
 */
export const isDefined = value => typeOf(value) !== 'undefined';

/**
 * return true if a given value is of type undefined
 *
 * examples:
 * isUndefined(0)         // false
 * isUndefined(undefined) // true
 */
export const isUndefined = value => typeOf(value) === 'undefined';

/**
 * return true if a given value is of type null
 *
 * examples:
 * isNull(0)         // false
 * isNull(undefined) // false
 * isNull(null)      // true
 */
export const isNull = value => typeOf(value) === 'null';

/**
 * return true if a given value is not of type null
 *
 * examples:
 * isNotNull(0)         // true
 * isNotNull(undefined) // true
 * isNotNull(null)      // false
 */
export const isNotNull = value => typeOf(value) !== 'null';

/**
 * return true if a given value is of type object
 *
 * examples:
 * isObject(0)         // false
 * isObject(undefined) // false
 * isObject({})        // true
 */
export const isObject = value => typeOf(value) === 'object';

/**
 * return true if a given value is not of type object
 *
 * examples:
 * isNotObject(0)         // true
 * isNotObject(undefined) // true
 * isNotObject({})        // false
 */
export const isNotObject = value => typeOf(value) !== 'object';

/**
 * return true if a given value is of type array
 *
 * examples:
 * isArray(0)         // false
 * isArray(undefined) // false
 * isArray([])        // true
 */
export const isArray = value => typeOf(value) === 'array';

/**
 * return true if a given value is not of type array
 *
 * examples:
 * isNotArray(0)         // true
 * isNotArray(undefined) // true
 * isNotArray([])        // false
 */
export const isNotArray = value => typeOf(value) !== 'array';

/**
 * return true if a given value is an empty array
 *
 * examples:
 * isEmptyArray(0)         // false
 * isEmptyArray(undefined) // false
 * isEmptyArray([1,2,3])   // false
 * isEmptyArray([])        // true
 */
export const isEmptyArray = value => typeOf(value) === 'array' && !value.length;

/**
 * return true if a given value is a non-empty array
 *
 * examples:
 * isNonEmptyArray(0)         // false
 * isNonEmptyArray(undefined) // false
 * isNonEmptyArray([])        // false
 * isNonEmptyArray([1,2,3])   // true
 */
export const isNonEmptyArray = value => typeOf(value) === 'array' && !!value.length;

/**
 * return true if a given value is a function
 *
 * examples:
 * isFunction(0)         // false
 * isFunction(undefined) // false
 * isFunction(() => {})  // true
 */
export const isFunction = value => typeOf(value) === 'function';

/**
 * return true if a given value is not a function
 *
 * examples:
 * isNotFunction(0)         // true
 * isNotFunction(undefined) // true
 * isNotFunction(() => {})  // false
 */
export const isNotFunction = value => typeOf(value) !== 'function';

/**
 * return true if a given value is true
 *
 * examples:
 * isTrue(0)         // false
 * isTrue(undefined) // false
 * isTrue(true)      // true
 */
export const isTrue = value => value === true;

/**
 * return true if a given value is false
 *
 * examples:
 * isFalse(0)         // false
 * isFalse(undefined) // false
 * isFalse(false)  // true
 */
export const isFalse = value => value === false;

/**
 * return true if a given value is truthy
 *
 * examples:
 * isTruthy(0)         // false
 * isTruthy(undefined) // false
 * isTruthy(1)         // true
 */
export const isTruthy = value => !!value;

/**
 * return true if a given value is falsy
 *
 * examples:
 * isFalsy(0)         // true
 * isFalsy(undefined) // true
 * isFalsy(1)         // false
 */
export const isFalsy = value => !value;

/**
 * return true if a given value is of type Date
 *
 * examples:
 * isDate(0)           // false
 * isDate(undefined)   // false
 * isDate(new Date())  // true
 */
export const isDate = (value): value is Date => value instanceof Date;

/**
 * return true if a given value is not of type Date
 *
 * examples:
 * isNotDate(0)           // true
 * isNotDate(undefined)   // true
 * isNotDate(new Date())  // false
 */
export const isNotDate = value => !(value instanceof Date);

/**
 * return true if a given value is of type RegExp
 *
 * examples:
 * isRegExp(0)             // false
 * isRegExp(undefined)     // false
 * isRegExp(new RegExp())  // true
 */
export const isRegExp = (value): value is RegExp => value instanceof RegExp;

/**
 * return true if a given value is not of type RegExp
 *
 * examples:
 * isRegExp(0)             // false
 * isRegExp(undefined)     // false
 * isRegExp(new RegExp())  // true
 */
export const isNotRegExp = value => !(value instanceof RegExp);

/**
 * return true if a given value deeply equals another value.
 *
 * examples:
 * isEqual(0)(1)            // false
 * isEqual([1])([1])        // true
 * isEqual({ a: { b: 1 }})
 *        ({ a: { b: 2 }})  // false
 */
export const isEqual = a => b => {
    if (a === b) {
        return true;
    }
    if (isRegExp(a) !== isRegExp(b)) {
        return false;
    }
    if (isRegExp(a) && isRegExp(b)) {
        return a.toString() === b.toString();
    }
    if (isDate(a) !== isDate(b)) {
        return false;
    }
    if (isDate(a) && isDate(b)) {
        return a.getTime() === b.getTime();
    }
    if (isArray(a) !== isArray(b)) {
        return false;
    }
    if (isArray(a) && isArray(b)) {
        if (!isEqual(a.length)(b.length)) {
            return false;
        }
        for (let i = a.length; i-- !== 0;) {
            if (!isEqual(a[i])(b[i])) {
                return false;
            }
        }
        return true;
    }
    if (isObject(a) && isObject(b)) {
        if (!isEqual(Object.keys(a).length)(Object.keys(b).length)) {
            return false;
        }
        for (let i = Object.keys(a).length; i-- !== 0;) {
            if (!Object.prototype.hasOwnProperty.call(b, Object.keys(a)[i])) {
                return false;
            }
        }
        for (let i = Object.keys(a).length; i-- !== 0;) {
            let key = Object.keys(a)[i];
            if (!isEqual(a[key])(b[key])) {
                return false;
            }
        }
        return true;
    }
    return a !== a && b !== b;
};
