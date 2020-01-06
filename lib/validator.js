'use strict';

let validator = module.exports = {};

/**
 * Based on a set of rules, is the input valid?
 * TODO: Define the rules ... how do we send them in? How do we identify?
 * @param input
 * @param rules
 * @returns {boolean}
 */
validator.isValid = (input, rules) => {
  let keys = Object.keys(rules.keys);
  let values = Object.values(rules.values)
  for(let i in values){
    if(values.required && typeof[keys] !== values.type){
      return false;
    }
  }
  return true;
};

/**
 * Is this a string?
 * @param input
 * @returns {boolean}
 */
validator.isString = (input) => {
  return typeof input === 'string';
};

validator.isNumber = (input) => {
  return typeof input === 'number';
};

validator.isObject = (input) => {
  return typeof input === 'object';
};

validator.isBoolean = (input) => {
  return typeof input === 'boolean';
};

validator.isFunction = (input) => {
  return typeof input === 'function';
};

validator.isArray = (input) => {
  return Array.isArray(input);
};


