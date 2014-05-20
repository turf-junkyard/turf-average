var index = require('./')
var test = require('tape')
var polygon = require('turf-polygon')
var point = require('turf-point')
var featurecollection =  require('turf-featurecollection')

test('average', function(t){
  var poly1 = t.polygon([[[0,0],[10,0],[10,10], [0,10]]])
  var poly2 = t.polygon([[[10,0],[20,10],[20,20], [20,0]]])
  var polyFC = t.featurecollection([poly1, poly2])
  var pt1 = t.point(5,5, {population: 200})
  var pt2 = t.point(1,3, {population: 600})
  var pt3 = t.point(14,2, {population: 100})
  var pt4 = t.point(13,1, {population: 200})
  var pt5 = t.point(19,7, {population: 300})
  var ptFC = t.featurecollection([pt1, pt2, pt3, pt4, pt5])

  var averaged = average(polyFC, ptFC, 'population', 'pop_avg')

  t.equal(averaged.features[0].geometry.type, 'Polygon')
  t.equal(averaged.features[0].properties.pop_avg, 400)
  t.equal(averaged.features[1].properties.pop_avg, 200)

  t.end()
})