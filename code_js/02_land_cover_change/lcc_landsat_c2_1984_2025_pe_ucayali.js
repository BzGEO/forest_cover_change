//######################################################################################################## 
//#                                                                                                    #\\
//#                           LANDTRENDR GREATEST DISTURBANCE MAPPING                                  #\\
//#                                                                                                    #\\
//########################################################################################################

// last modified: 2025-11-13

// author: Justin Braaten | jstndfiaaten@gmail.com
//         Zhiqiang Yang  | zhiqiang.yang@oregonstate.edu
//         Robert Kennedy | rkennedy@coas.oregonstate.edu
// parameter definitions: https://emapr.github.io/LT-GEE/api.html#getchangemap
// website: https://github.com/eMapR/LT-GEE

//##########################################################################################
// START INPUTS
//##########################################################################################

// define collection parameters
var startYear = 1984;
var endYear = 2025;
var startDay = '05-01';
var endDay = '10-31';

// define change parameters
var changeParams = {
  delta:  'loss',
  sort:   'oldest',
  year:   {checked:true, start:startYear, end:endYear},
  mag:    {checked:true, value:200,  operator:'>'},
  dur:    {checked:true, value:4,    operator:'<'},
  preval: {checked:true, value:300,  operator:'>'},
  mmu:    {checked:true, value:2},};

var roi = ee.FeatureCollection("projects/servir-sco-assets/assets/ucayali");

var region = roi;
var aoi = roi;
var index = 'NBR';
var maskThese = ['cloud', 'shadow', 'snow', 'water'];

// define landtrendr parameters
var runParams = { 
  maxSegments:            6,
  spikeThreshold:         0.9,
  vertexCountOvershoot:   3,
  preventOneYearRecovery: true,
  recoveryThreshold:      0.25, // ** disallows for recoveries under 4 years **
  pvalThreshold:          0.05,
  bestModelProportion:    0.70,
  minObservationsNeeded:  6
};

//##########################################################################################
// END INPUTS
//##########################################################################################

// load the LandTrendr.js module
var ltgee = require('users/emaprlab/public:Modules/LandTrendr.js'); 
//var ltgee = require('users/servirbz/land_cover_change:LT_base/collection2/LandTrendr_030m_3');

// add index to changeParams object
changeParams.index = index;

// run landtrendr
var lt = ltgee.runLT(startYear, endYear, startDay, endDay, aoi, index, [], runParams, maskThese);

// get the change map layers
var changeImg = ltgee.getChangeMap(lt, changeParams).reproject(ee.Projection('EPSG:4326').atScale(30));

// set visualization dictionaries
var palette = ['#9400D3', '#4B0082', '#0000FF', '#00FF00', '#FFFF00', '#FF7F00', '#FF0000'];
var yodVizParms = {min: startYear,  max: endYear,  palette: palette};
var magVizParms = {min: 200,  max: 800,  palette: palette};

// display the change attribute map - note that there are other layers - print changeImg to console to see all
Map.centerObject(aoi, 8);
Map.addLayer(changeImg.select(['mag']).clip(aoi), magVizParms, 'Magnitude of Change', false);
Map.addLayer(changeImg.select(['yod']).clip(aoi), yodVizParms, 'Year of Detection', false);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var exportImg0 = changeImg.clip(region).unmask(0).short();
var exportImg = changeImg.clip(region).short();

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
var x = require('users/servirbz/servir_lcc:LT_base/img_collections/coll2_landsat');
print(x.landsat_c2.filterBounds(roi).filterDate("2023-01-01","2023-12-31").sort('system:time_start', false).first());
*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Export to  Google Drive


Export.image.toDrive({image:exportImg,description:'export_drv',folder:'x_tmp_gee_outputs', 
  fileNamePrefix:'pe_ucayali_defor_lt_nbr_1984_2025_30m__1024_gcs',region:region,scale:30,crs:'EPSG:4326',maxPixels: 1e13});


// Export to EE asset space
Export.image.toAsset({image: exportImg,  description: 'export_ee_lt1',
  assetId: 'pe_ucayali_defor_lt_nbr_1984_2025_30m__1024_gcs2',
  scale: 30,  crs:'EPSG:4326', region: region,  maxPixels: 1e13});



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////