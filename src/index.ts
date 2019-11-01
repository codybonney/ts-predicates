import typeOf from 'typeof-util';

/** return true if a given value is of type boolean
 *
 * examples:
 * isBoolean(true)  // true
 * isBoolean(false) // true
 * isBoolean('no')  // false
 */
export const isBoolean = value => typeOf(value) === 'boolean';

/**
 * return true if a given value is of type string
 *
 * examples:
 * isString(5)     // false
 * isString('yes') // true
 */
export const isString = value => typeOf(value) === 'string';

/**
 * return true if a given value is of type undefined
 *
 * examples:
 * isUndefined(0)         // false
 * isUndefined(undefined) // true
 */
export const isUndefined = value => typeOf(value) === 'undefined';

/**
 * return true if a given value is not of type undefined
 *
 * examples:
 * isDefined(0)         // true
 * isDefined(undefined) // false
 */
export const isDefined = value => typeOf(value) !== 'undefined';

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
 * return true if a given value is an object
 *
 * examples:
 * isObject(0)         // false
 * isObject(undefined) // false
 * isObject({})        // true
 */
export const isObject = value => typeOf(value) === 'object';

/**
 * return true if a given value is an array
 *
 * examples:
 * isArray(0)         // false
 * isArray(undefined) // false
 * isArray([])        // true
 */
export const isArray = value => typeOf(value) === 'array';

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
