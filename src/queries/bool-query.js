const CONDITIONS_MAP = {
  filter: 'filter',
  must: 'must',
  should: 'should',
  must_not: 'must_not',
  mustNot: 'must_not',
  and: 'filter',
  or: 'should',
  not: 'must_not'
}

/**
 * Construct a Boolean query.
 *
 * @private
 * @memberof Queries
 *
 * @param  {String} condition Boolean condition: must, must_not, should.
 * @param  {Object} query     Fully-formed query.
 * @return {Object}           Boolean query.
 */
export default function boolQuery(condition, query) {
  let cond = CONDITIONS_MAP[condition]
  return {
    bool: {
      [cond]: [query]
    }
  }
}
