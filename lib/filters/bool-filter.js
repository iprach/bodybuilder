'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = boolFilter;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CONDITIONS_MAP = {
  filter: 'filter',
  must: 'must',
  should: 'should',
  must_not: 'must_not',
  mustNot: 'must_not',
  and: 'filter',
  or: 'should',
  not: 'must_not'
};

/**
 * Construct a Boolean composite filter.
 *
 * @private
 * @memberof Filters
 *
 * @param  {String} condition Boolean condition: must, must_not, should.
 * @param  {Object} filter    Fully-formed filter.
 * @return {Object}           Boolean filter.
 */
function boolFilter(condition, filter) {
  var cond = CONDITIONS_MAP[condition];
  return {
    bool: _defineProperty({}, cond, [filter])
  };
}