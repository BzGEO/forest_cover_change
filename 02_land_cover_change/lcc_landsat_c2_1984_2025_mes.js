//######################################################################################################## 
//#                                                                                                    #\\
//#                           LANDTRENDR GREATEST DISTURBANCE MAPPING                                  #\\
//#                                                                                                    #\\
//########################################################################################################

// date: 2025-06-30
// author: Justin Braaten | jstnbraaten@gmail.com
//         Zhiqiang Yang  | zhiqiang.yang@oregonstate.edu
//         Robert Kennedy | rkennedy@coas.oregonstate.edu
// parameter definitions: https://emapr.github.io/LT-GEE/api.html#getchangemap
// website: https://github.com/eMapR/LT-GEE
// notes: 
//   - you must add the LT-GEE API to your GEE account to run this script. 
//     Visit this URL to add it:
//     https://code.earthengine.google.com/?accept_repo=users/emaprlab/public
//   - use this app to help parameterize: 
//     https://emaprlab.users.earthengine.app/view/lt-gee-change-mapper

//##########################################################################################
// START INPUTS
//##########################################################################################

// define collection parameters
var startYear = 1984;
var endYear = 2025;
var startDay = '01-01';
var endDay = '05-31';

// define change parameters
var changeParams = {
  delta:  'loss',
  sort:   'greatest',
  year:   {checked:true, start:startYear, end:endYear},
  mag:    {checked:true, value:200,  operator:'>'},
  dur:    {checked:true, value:4,    operator:'<'},
  preval: {checked:true, value:300,  operator:'>'},
  mmu:    {checked:true, value:8},
};

var aoi = ee.Geometry.Rectangle(-76.1, 6.5, -92.5, 21.65); // Mesoamerica
var region = aoi;
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
  minObservationsNeeded:  6};

//##########################################################################################
// END INPUTS
//##########################################################################################

// load the LandTrendr.js module
var ltgee = require('users/emaprlab/public:Modules/LandTrendr.js');

// add index to changeParams object
changeParams.index = index;

// run landtrendr
var lt = ltgee.runLT(startYear, endYear, startDay, endDay, aoi, index, [], runParams, maskThese);

// get the change map layers
var changeImg = ltgee.getChangeMap(lt, changeParams);

// set visualization dictionaries
var yodVizParms = {min: startYear,  max: endYear,  palette: ['#9400D3','#4B0082','#0000FF','#00FF00','#FFFF00','#FF7F00','#FF0000']};
var magVizParms = {min: 200,  max: 800,  palette: ['#9400D3', '#4B0082', '#0000FF', '#00FF00', '#FFFF00', '#FF7F00', '#FF0000']};

// display the change attribute map - note that there are other layers - print changeImg to console to see all
Map.centerObject(aoi, 9);
//Map.addLayer(changeImg.select(['mag']), magVizParms, 'Magnitude of Change', 0);
Map.addLayer(changeImg.select(['yod']), yodVizParms, 'Year of Detection', 0);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var exportImg0 = changeImg.clip(region).unmask(0).short();
var exportImg = changeImg.clip(region).short();

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Export to  Google Drive

/*
Export.image.toDrive({image:exportImg.select(['yod']),description:'export_drv',folder:'x_tmp_gee_outputs', 
  fileNamePrefix:'mes_defor_lt_nbr_1984_2025_030m_gcs',region:region,scale:30,crs:'EPSG:4326',maxPixels: 1e13});
*/

// Export to EE asset space
Export.image.toAsset({image: exportImg,  description: 'export_ee_mes_lt',
  assetId: 'mes_forest_loss_lt_nbr_1984_2025_01_05_030m',
  scale: 30,  region: region, crs:'EPSG:4326', maxPixels: 1e13});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////