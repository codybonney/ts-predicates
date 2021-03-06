import typeOf from 'typeof-util';

/**
 * return true if a given value is of type boolean
 *
 * examples:
 * isBoolean(true)  // true
 * isBoolean(false) // true
 * isBoolean('no')  // false
 */
export const isBoolean = (value): value is boolean => typeOf(value) === 'boolean';

/**
 * return true if a given value is not of type boolean
 *
 * examples:
 * isNotBoolean(true)  // false
 * isNotBoolean(false) // false
 * isNotBoolean('no')  // true
 */
export const isNotBoolean = <T>(value: T): value is Exclude<T, boolean> => !isBoolean(value);

/**
 * return true if a given value is of type string
 *
 * examples:
 * isString(5)     // false
 * isString('yes') // true
 */
export const isString = (value: unknown): value is string => typeOf(value) === 'string';

/**
 * return true if a given value is not of type string
 *
 * examples:
 * isNotString(5)     // true
 * isNotString('yes') // false
 */
export const isNotString = <T>(value: T): value is Exclude<T, string> => !isString(value);

/**
 * return true if a given value is of type number
 *
 * examples:
 * isNumber(5)     // true
 * isNumber('yes') // false
 */
export const isNumber = (value: unknown): value is number => typeOf(value) === 'number';

/**
 * return true if a given value is not of type number
 *
 * examples:
 * isNotNumber(5)     // false
 * isNotNumber('yes') // true
 */
export const isNotNumber = <T>(value: T): value is Exclude<T, number> => !isNumber(value);

/**
 * return true if a given value is not of type undefined
 *
 * examples:
 * isDefined(0)         // true
 * isDefined(undefined) // false
 */
export const isDefined = <T>(value: T): value is Exclude<T, undefined> => typeOf(value) !== 'undefined';

/**
 * return true if a given value is of type undefined
 *
 * examples:
 * isUndefined(0)         // false
 * isUndefined(undefined) // true
 */
export const isUndefined = (value): value is undefined => !isDefined(value);

/**
 * return true if a given value is of type null
 *
 * examples:
 * isNull(0)         // false
 * isNull(undefined) // false
 * isNull(null)      // true
 */
export const isNull = (value): value is null => typeOf(value) === 'null';

/**
 * return true if a given value is not of type null
 *
 * examples:
 * isNotNull(0)         // true
 * isNotNull(undefined) // true
 * isNotNull(null)      // false
 */
export const isNotNull = <T>(value: T): value is Exclude<T, null> => !isNull(value);

/**
 * return true if a given value is of type object
 *
 * examples:
 * isObject(0)         // false
 * isObject(undefined) // false
 * isObject({})        // true
 */
export const isObject = (value): value is { [key: string]: any } => typeOf(value) === 'object';

/**
 * return true if a given value is not of type object
 *
 * examples:
 * isNotObject(0)         // true
 * isNotObject(undefined) // true
 * isNotObject({})        // false
 */
export const isNotObject = <T>(value: T): value is Exclude<T, object> => !isObject(value);

/**
 * return true if a given value is of type object, is not a special class, and does not have other prototypes
 *
 * examples:
 * isPlainObject(0)         // false
 * isPlainObject(Date())    // false
 * isPlainObject({})        // true
 */
export const isPlainObject = (value): value is { [key: string]: any } =>
    typeOf(value) === 'object'
    && value.constructor === Object
    && Object.getPrototypeOf(value) === Object.prototype;

/**
 * return true if a given value is not of type object, is a special object class, or has other prototypes
 *
 * examples:
 * isNotPlainObject(0)         // true
 * isNotPlainObject(Date())    // true
 * isNotPlainObject({})        // false
 */
export const isNotPlainObject = (value) => !isPlainObject(value);

/**
 * return true if a given value is of type array
 *
 * examples:
 * isArray(0)         // false
 * isArray(undefined) // false
 * isArray([])        // true
 */
export const isArray = <T>(value: unknown): value is T[] => typeOf(value) === 'array';

/**
 * return true if a given value is not of type array
 *
 * examples:
 * isNotArray(0)         // true
 * isNotArray(undefined) // true
 * isNotArray([])        // false
 */
export const isNotArray = <T>(value: T): value is Exclude<T, Array<any>> => !isArray(value);

/**
 * return true if a given value is an empty array
 *
 * examples:
 * isEmptyArray(0)         // false
 * isEmptyArray(undefined) // false
 * isEmptyArray([1,2,3])   // false
 * isEmptyArray([])        // true
 */
export const isEmptyArray = <T>(value: unknown): value is T[] => isArray(value) && !value.length;

/**
 * return true if a given value is a non-empty array
 *
 * examples:
 * isNonEmptyArray(0)         // false
 * isNonEmptyArray(undefined) // false
 * isNonEmptyArray([])        // false
 * isNonEmptyArray([1,2,3])   // true
 */
export const isNonEmptyArray = <T>(value: unknown): value is T[] => isArray(value) && !!value.length;

/**
 * return true if a given value is a function
 *
 * examples:
 * isFunction(0)         // false
 * isFunction(undefined) // false
 * isFunction(() => {})  // true
 */
export const isFunction = (value): value is Function => typeOf(value) === 'function';

/**
 * return true if a given value is not a function
 *
 * examples:
 * isNotFunction(0)         // true
 * isNotFunction(undefined) // true
 * isNotFunction(() => {})  // false
 */
export const isNotFunction = value => !isFunction(value);

/**
 * return true if a given value is true
 *
 * examples:
 * isTrue(0)         // false
 * isTrue(undefined) // false
 * isTrue(true)      // true
 */
export const isTrue = (value): value is boolean => value === true;

/**
 * return true if a given value is false
 *
 * examples:
 * isFalse(0)         // false
 * isFalse(undefined) // false
 * isFalse(false)  // true
 */
export const isFalse = (value): value is boolean => value === false;

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
export const isNotDate = <T>(value: T): value is Exclude<T, Date> => !isDate(value);

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
export const isNotRegExp = <T>(value: T): value is Exclude<T, RegExp> => !isRegExp(value);

/**
 * return true if a given value is of type Symbol
 *
 * examples:
 * isSymbol(0)           // false
 * isSymbol(undefined)   // false
 * isSymbol(Symbol())    // true
 */
export const isSymbol = (value): value is symbol => typeOf(value) === 'symbol';

/**
 * return true if a given value is not of type Symbol
 *
 * examples:
 * isNotSymbol(0)           // true
 * isNotSymbol(undefined)   // true
 * isNotSymbol(Symbol())    // false
 */
export const isNotSymbol = <T>(value: T): value is Exclude<T, symbol> => !isSymbol(value);

/**
 * return true if a given value deeply equals another value.
 *
 * examples:
 * isEqual(0)(1)            // false
 * isEqual([1])([1])        // true
 * isEqual({ a: { b: 1 }})
 *        ({ a: { b: 2 }})  // false
 */
export const isEqual = <T>(a: T) => (b): b is T => {
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
        if (isNotEqual(a.length)(b.length)) {
            return false;
        }
        for (let i = a.length; i-- !== 0;) {
            if (isNotEqual(a[i])(b[i])) {
                return false;
            }
        }
        return true;
    }
    if (isObject(a) && isObject(b)) {
        if (isNotEqual(Object.keys(a).length)(Object.keys(b).length)) {
            return false;
        }
        for (let i = Object.keys(a).length; i-- !== 0;) {
            if (!Object.prototype.hasOwnProperty.call(b, Object.keys(a)[i])) {
                return false;
            }
        }
        for (let i = Object.keys(a).length; i-- !== 0;) {
            let key = Object.keys(a)[i];
            if (isNotEqual(a[key])(b[key])) {
                return false;
            }
        }
        return true;
    }
    return a !== a && b !== b;
};

/**
 * return true if a given value does not deeply equal another value.
 *
 * examples:
 * isEqual(0)(1)            // true
 * isEqual([1])([1])        // false
 * isEqual({ a: { b: 1 }})
 *        ({ a: { b: 2 }})  // true
 */
export const isNotEqual = <T>(a: T) => <T2>(b: T2): b is T2 => !isEqual(a)(b);
