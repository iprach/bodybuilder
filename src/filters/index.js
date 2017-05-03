import boolFilter from './bool-filter'
import existsFilter from './exists-filter'
import fuzzyFilter from './fuzzy-filter'
import matchFilter from './match-filter'
import geoBoundingBoxFilter from './geo-bounding-box-filter'
import geoDistanceFilter from './geo-distance-filter'
import geoPolygon from './geo-polygon-filter'
import geoShapeFilter from './geo-shape-filter'
import idsFilter from './ids-filter'
import matchAllFilter from './match-all-filter'
import missingFilter from './missing-filter'
import nestedFilter from './nested-filter'
import prefixFilter from './prefix-filter'
import rangeFilter from './range-filter'
import regexpFilter from './regexp-filter'
import wildcardFilter from './wildcard-filter'
import termFilter from './term-filter'
import termsFilter from './terms-filter'
import typeFilter from './type-filter'
import scriptFilter from './script-filter'

/**
 * Construct elasticsearch filters.
 *
 * @namespace Filters
 *
 * @example
 * var body = new Bodybuilder()
 *   .filter('missing', 'user', 'kimchy')
 *   .build()
 */
export default {
  bool: boolFilter,
  boolean: boolFilter,
  exists: existsFilter,
  exist: existsFilter,
  fuzzy: fuzzyFilter,
  match: matchFilter,
  geo_bounding_box: geoBoundingBoxFilter,
  geoBoundingBox: geoBoundingBoxFilter,
  geoboundingbox: geoBoundingBoxFilter,
  'geo-bounding-box': geoBoundingBoxFilter,
  geo_polygon: geoPolygon,
  geoPolygon: geoPolygon,
  geopolygon: geoPolygon,
  'geo-polygon': geoPolygon,
  geo_distance: geoDistanceFilter,
  geodistance: geoDistanceFilter,
  geoDistance: geoDistanceFilter,
  'geo-distance': geoDistanceFilter,
  geo_shape: geoShapeFilter,
  geoshape: geoShapeFilter,
  geoShape: geoShapeFilter,
  'geo-shape': geoShapeFilter,
  ids: idsFilter,
  matchAll: matchAllFilter,
  matchall: matchAllFilter,
  'match-all': matchAllFilter,
  match_all: matchAllFilter,
  missing: missingFilter,
  nested: nestedFilter,
  prefix: prefixFilter,
  range: rangeFilter,
  regexp: regexpFilter,
  wildcard: wildcardFilter,
  term: termFilter,
  terms: termsFilter,
  type: typeFilter,
  script: scriptFilter
}
