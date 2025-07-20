////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Last modified: 20.07.2025 | Belize domain
// orig. code (July 2020): https://code.earthengine.google.com/?scriptPath=users%2Fclarype%2FLT-Change-DB%3ALt-Change-Db.js

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 
// load LandTrendr library
var ltgee = require('users/emaprlab/public:Modules/LandTrendr.js'); // run LandTrendr at 30m

// define external parameters
var roi = ee.Geometry.Rectangle(-87.64, 15.87, -89.4, 18.54); // BZ
//var roi = ee.Geometry.Rectangle(-76.1, 6.5, -92.5, 21.65); // Mesoamerica

var featureCol = roi; // provide the path to aoi asset
var featureKey = 'landsat_c2_boa'; // provide the feature attribute that will define the study area
var featureValue = 'bz'; // what unique value from the above attribute field defines the study area
var runName = 'v01'; // a version name to identify the run; it should NOT include a dash/hyphen (-) 
var gDriveFolder = 'x_tmp_gee_outputs'; // what is the name of the Google Drive folder that you want the outputs placed in

var startYear = 1984; // what year do you want to start the time series 
var endYear = 2025; // what year do you want to end the time series
var startDay = '01-01'; // what should the beginning date of annual composite be | month-day 06-01
var endDay =   '06-30'; // what should the ending date of annual composite be | month-day 09-30
var index = 'NBR'; // select the index to run, option are: 'NBRz', Band5z, 'ENC'
var maskThese = ['cloud', 'shadow', 'snow', 'water']; // select classes to mask as a list of strings: 'cloud', 'shadow', 'snow', 'water'

// define internal parameters - see LandTrendr segmentation parameters section of LT-ChangeDB guide
var runParams = { 
  maxSegments:            6,
  spikeThreshold:         0.9,
  vertexCountOvershoot:   3,
  preventOneYearRecovery: true,
  recoveryThreshold:      0.20, // disallows for regrowth under 5 years
  pvalThreshold:          0.05,
  bestModelProportion:    0.70, // R2 of the LandTrendr model -> only valid for change mapping
  minObservationsNeeded:  6};

// optional inputs
var outProj = 'EPSG:4326'; // what should the output projection be? 'EPSG:4326' is WGS 1984
var affine = [30.0, 0, 15.0, 0, -30.0, 15.0]; // should center of pixel be tied to grid or corner - 15.0 is center, change to 0.0 for corner (15.0 aligns to NLCD products)
var options = {                            // options to exclude images
  'exclude':{
    'imgIds':[],                            // ...provide a list of image ids as an array
    'slcOff':false                          // ...include Landsat 7 scan line corrector off images (true or false)
  }};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// buffer the aoi 10 pixels to give consideration to mmu filter
var aoiBuffer = 300;

// get geometry stuff
var aoi = ee.FeatureCollection(featureCol).geometry().buffer(aoiBuffer);

// make annual composite collections
var srCollection = ltgee.buildSRcollection(startYear, endYear, startDay, endDay, aoi, maskThese, options);
var ltCollection = ltgee.buildLTcollection(srCollection, index, []);

// run landtrendr
runParams.timeSeries = ltCollection;
var ltResult = ee.Algorithms.TemporalSegmentation.LandTrendr(runParams);
console.log(runParams);
// get the rmse
var rmse = ltResult.select('rmse');

// get the year array out for use in fitting TC
var lt = ltResult.select('LandTrendr');
var vertMask = lt.arraySlice(0, 3, 4);
var vertYears = lt.select('LandTrendr').arraySlice(0, 0, 1).arrayMask(vertMask);

// make a TC source stack
var tc = ltgee.transformSRcollection(srCollection, ['B1','B2','B3','B4','B5','B7']);
var tcimage = tc.toBands();
var tcbSource = tcimage.select("^.*TCB.*$").clip(aoi);
var tcwSource = tcimage.select("^.*TCW.*$").clip(aoi);
var tcgSource = tcimage.select("^.*TCG.*$").clip(aoi);

// fit TC
var fittedTC = ee.Algorithms.TemporalSegmentation.LandTrendrFit(tc, vertYears, runParams.spikeThreshold, runParams.minObservationsNeeded);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var from = ['yr_1984', 'yr_1985', 'yr_1986', 'yr_1987', 'yr_1988', 'yr_1989', 'yr_1990', 'yr_1991', 'yr_1992', 'yr_1993', 'yr_1994', 'yr_1995', 'yr_1996', 'yr_1997', 'yr_1998', 'yr_1999', 'yr_2000', 'yr_2001', 'yr_2002', 'yr_2003', 'yr_2004', 'yr_2005', 'yr_2006', 'yr_2007', 'yr_2008', 'yr_2009', 'yr_2010', 'yr_2011', 'yr_2012', 'yr_2013', 'yr_2014', 'yr_2015', 'yr_2016', 'yr_2017', 'yr_2018', 'yr_2019', 'yr_2020', 'yr_2021', 'yr_2022', 'yr_2023', 'yr_2024', 'yr_2025'];
var bnds_b1 = ['B1_1984','B1_1985', 'B1_1986', 'B1_1987', 'B1_1988', 'B1_1989', 'B1_1990', 'B1_1991', 'B1_1992', 'B1_1993', 'B1_1994', 'B1_1995', 'B1_1996', 'B1_1997', 'B1_1998', 'B1_1999', 'B1_2000', 'B1_2001', 'B1_2002', 'B1_2003', 'B1_2004', 'B1_2005', 'B1_2006', 'B1_2007', 'B1_2008', 'B1_2009', 'B1_2010', 'B1_2011', 'B1_2012', 'B1_2013', 'B1_2014', 'B1_2015', 'B1_2016', 'B1_2017', 'B1_2018', 'B1_2019', 'B1_2020', 'B1_2021', 'B1_2022', 'B1_2023', 'B1_2024', 'B1_2025'];
var bnds_b2 = ['B2_1984','B2_1985', 'B2_1986', 'B2_1987', 'B2_1988', 'B2_1989', 'B2_1990', 'B2_1991', 'B2_1992', 'B2_1993', 'B2_1994', 'B2_1995', 'B2_1996', 'B2_1997', 'B2_1998', 'B2_1999', 'B2_2000', 'B2_2001', 'B2_2002', 'B2_2003', 'B2_2004', 'B2_2005', 'B2_2006', 'B2_2007', 'B2_2008', 'B2_2009', 'B2_2010', 'B2_2011', 'B2_2012', 'B2_2013', 'B2_2014', 'B2_2015', 'B2_2016', 'B2_2017', 'B2_2018', 'B2_2019', 'B2_2020', 'B2_2021', 'B2_2022', 'B2_2023', 'B2_2024', 'B2_2025'];
var bnds_b3 = ['B3_1984','B3_1985', 'B3_1986', 'B3_1987', 'B3_1988', 'B3_1989', 'B3_1990', 'B3_1991', 'B3_1992', 'B3_1993', 'B3_1994', 'B3_1995', 'B3_1996', 'B3_1997', 'B3_1998', 'B3_1999', 'B3_2000', 'B3_2001', 'B3_2002', 'B3_2003', 'B3_2004', 'B3_2005', 'B3_2006', 'B3_2007', 'B3_2008', 'B3_2009', 'B3_2010', 'B3_2011', 'B3_2012', 'B3_2013', 'B3_2014', 'B3_2015', 'B3_2016', 'B3_2017', 'B3_2018', 'B3_2019', 'B3_2020', 'B3_2021', 'B3_2022', 'B3_2023', 'B3_2024', 'B3_2025'];
var bnds_b4 = ['B4_1984','B4_1985', 'B4_1986', 'B4_1987', 'B4_1988', 'B4_1989', 'B4_1990', 'B4_1991', 'B4_1992', 'B4_1993', 'B4_1994', 'B4_1995', 'B4_1996', 'B4_1997', 'B4_1998', 'B4_1999', 'B4_2000', 'B4_2001', 'B4_2002', 'B4_2003', 'B4_2004', 'B4_2005', 'B4_2006', 'B4_2007', 'B4_2008', 'B4_2009', 'B4_2010', 'B4_2011', 'B4_2012', 'B4_2013', 'B4_2014', 'B4_2015', 'B4_2016', 'B4_2017', 'B4_2018', 'B4_2019', 'B4_2020', 'B4_2021', 'B4_2022', 'B4_2023', 'B4_2024', 'B4_2025'];
var bnds_b5 = ['B5_1984','B5_1985', 'B5_1986', 'B5_1987', 'B5_1988', 'B5_1989', 'B5_1990', 'B5_1991', 'B5_1992', 'B5_1993', 'B5_1994', 'B5_1995', 'B5_1996', 'B5_1997', 'B5_1998', 'B5_1999', 'B5_2000', 'B5_2001', 'B5_2002', 'B5_2003', 'B5_2004', 'B5_2005', 'B5_2006', 'B5_2007', 'B5_2008', 'B5_2009', 'B5_2010', 'B5_2011', 'B5_2012', 'B5_2013', 'B5_2014', 'B5_2015', 'B5_2016', 'B5_2017', 'B5_2018', 'B5_2019', 'B5_2020', 'B5_2021', 'B5_2022', 'B5_2023', 'B5_2024', 'B5_2025'];
var bnds_b7 = ['B7_1984','B7_1985', 'B7_1986', 'B7_1987', 'B7_1988', 'B7_1989', 'B7_1990', 'B7_1991', 'B7_1992', 'B7_1993', 'B7_1994', 'B7_1995', 'B7_1996', 'B7_1997', 'B7_1998', 'B7_1999', 'B7_2000', 'B7_2001', 'B7_2002', 'B7_2003', 'B7_2004', 'B7_2005', 'B7_2006', 'B7_2007', 'B7_2008', 'B7_2009', 'B7_2010', 'B7_2011', 'B7_2012', 'B7_2013', 'B7_2014', 'B7_2015', 'B7_2016', 'B7_2017', 'B7_2018', 'B7_2019', 'B7_2020', 'B7_2021', 'B7_2022', 'B7_2023', 'B7_2024', 'B7_2025'];

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// get TC as annual bands stacks 
var ftvB1 = ltgee.getFittedData(fittedTC, startYear, endYear, 'B1', true).select(from, bnds_b1).clip(aoi);
var ftvB2 = ltgee.getFittedData(fittedTC, startYear, endYear, 'B2', true).select(from, bnds_b2).clip(aoi);
var ftvB3 = ltgee.getFittedData(fittedTC, startYear, endYear, 'B3', true).select(from, bnds_b3).clip(aoi);
var ftvB4 = ltgee.getFittedData(fittedTC, startYear, endYear, 'B4', true).select(from, bnds_b4).clip(aoi);
var ftvB5 = ltgee.getFittedData(fittedTC, startYear, endYear, 'B5', true).select(from, bnds_b5).clip(aoi);
var ftvB7 = ltgee.getFittedData(fittedTC, startYear, endYear, 'B7', true).select(from, bnds_b7).clip(aoi);

// get the vertex stack 
var vertInfo = ltgee.getLTvertStack(lt, runParams);

// remove the src values from vertex stack - no need to download them
var vertStack = vertInfo.select(['^.*yrs.*$']).addBands(vertInfo.select(['^.*fit.*$']));

// stack all the layers up
var ltStack2 = vertStack.addBands(ftvB1).addBands(ftvB2).addBands(ftvB3).addBands(ftvB4).addBands(ftvB5).addBands(ftvB7)
                       .round().toShort().clip(aoi).unmask(-9999).select(['^.*B.*$'])
                       .setDefaultProjection('EPSG:4326', null, 30) // ** REPROJECT DATA TO 100m RESOLUTION **
                       .reduceResolution({reducer: ee.Reducer.mean(),maxPixels:16,bestEffort: true})
                       .toInt16();
                       //.reproject('EPSG:4326', null, 100);
                       
//print(ftvB1);
//print(vertStack);
print(ltStack2);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// OPTIONAL data generation -> useful for extracting out individual annual seasonal mosaics
/*
var landsat_1985 = ltStack2.select(['B1_1985','B2_1985','B3_1985','B4_1985','B5_1985','B7_1985']);
var landsat_1986 = ltStack2.select(['B1_1986','B2_1986','B3_1986','B4_1986','B5_1986','B7_1986']);
var landsat_1987 = ltStack2.select(['B1_1987','B2_1987','B3_1987','B4_1987','B5_1987','B7_1987']);
var landsat_1989 = ltStack2.select(['B1_1989','B2_1989','B3_1989','B4_1989','B5_1989','B7_1989']);
var landsat_1990 = ltStack2.select(['B1_1990','B2_1990','B3_1990','B4_1990','B5_1990','B7_1990']);
var landsat_1995 = ltStack2.select(['B1_1995','B2_1995','B3_1995','B4_1995','B5_1995','B7_1995']);
var landsat_2000 = ltStack2.select(['B1_2000','B2_2000','B3_2000','B4_2000','B5_2000','B7_2000']);
var landsat_2005 = ltStack2.select(['B1_2005','B2_2005','B3_2005','B4_2005','B5_2005','B7_2005']);
var landsat_2010 = ltStack2.select(['B1_2010','B2_2010','B3_2010','B4_2010','B5_2010','B7_2010']);
var landsat_2015 = ltStack2.select(['B1_2015','B2_2015','B3_2015','B4_2015','B5_2015','B7_2015']);
var landsat_2017 = ltStack2.select(['B1_2017','B2_2017','B3_2017','B4_2017','B5_2017','B7_2017']);
var landsat_2020 = ltStack2.select(['B1_2020','B2_2020','B3_2020','B4_2020','B5_2020','B7_2020']);
var landsat_2021 = ltStack2.select(['B1_2021','B2_2021','B3_2021','B4_2021','B5_2021','B7_2021']);
var landsat_2022 = ltStack2.select(['B1_2022','B2_2022','B3_2022','B4_2022','B5_2022','B7_2022']);
var landsat_2023 = ltStack2.select(['B1_2023','B2_2023','B3_2023','B4_2023','B5_2023','B7_2023']);
var landsat_2024 = ltStack2.select(['B1_2024','B2_2024','B3_2024','B4_2024','B5_2024','B7_2024']);
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var nVert = parseInt(runParams.maxSegments)+1;
var fileNamePrefix = featureValue+'_'+featureKey+'_'+startYear.toString()+'_'+startDay.replace('-', '_')+'_'+endYear.toString()+'_'+endDay.replace('-', '_')+'_'+runName;  

// make a timesync stack
var box = aoi.bounds();
var tsStack = ltgee.timesyncLegacyStack(startYear, endYear, startDay, endDay, box);

// make clear pixel count stack
var nClearCollection = ltgee.buildClearPixelCountCollection(startYear, endYear, startDay, endDay, aoi, maskThese);
var nClearStack = ltgee.collectionToBandStack(nClearCollection, startYear, endYear);

// make a list of images use to build collection
var srCollectionList = ltgee.getCollectionIDlist(startYear, endYear, startDay, endDay, aoi, options).get('idList');

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Map.addLayer(ltStack2, {min: 0, max: 4500, bands:['B5_1989','B4_1989','B3_1989']}, "Landsat_1989", false);
Map.addLayer(ltStack2, {min: 0, max: 4500, bands:['B5_1990','B4_1990','B3_1990']}, "Landsat_1990", false);
Map.addLayer(ltStack2, {min: 0, max: 4500, bands:['B5_1992','B4_1992','B3_1992']}, "Landsat_1992", false);
Map.addLayer(ltStack2, {min: 0, max: 4500, bands:['B5_2000','B4_2000','B3_2000']}, "Landsat_2000", false);
Map.addLayer(ltStack2, {min: 0, max: 4500, bands:['B5_2010','B4_2010','B3_2010']}, "Landsat_2010", false);
Map.addLayer(ltStack2, {min: 0, max: 4500, bands:['B5_2017','B4_2017','B3_2017']}, "Landsat_2017", false);
Map.addLayer(ltStack2, {min: 0, max: 4500, bands:['B5_2020','B4_2020','B3_2020']}, "Landsat_2020", false);
Map.addLayer(ltStack2, {min: 0, max: 4500, bands:['B5_2021','B4_2021','B3_2021']}, "Landsat_2021", false);
Map.addLayer(ltStack2, {min: 0, max: 4500, bands:['B5_2022','B4_2022','B3_2022']}, "Landsat_2022", false);
Map.addLayer(ltStack2, {min: 0, max: 4500, bands:['B5_2023','B4_2023','B3_2023']}, "Landsat_2023", false);
Map.addLayer(ltStack2, {min: 0, max: 4500, bands:['B5_2024','B4_2024','B3_2024']}, "Landsat_2024", false);
Map.addLayer(ltStack2, {min: 0, max: 4500, bands:['B5_2025','B4_2025','B3_2025']}, "Landsat_2024", false);
Map.setCenter(-88.7713, 17.4842, 11); // center over central Belize

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Export data at 30m resolution

Export.image.toAsset({'image': ltStack2.toInt16(), 'region': aoi, 'scale': 30, 'description': 'bz_lt_fitted_1984_2025',
  'assetId': 'bz_landsat_boa_fitted_r70_1984_2025_030m',
  crs:'EPSG:4326', 'maxPixels': 1e13});

///////////////////////////////////////////////////////////////////////////////////////////////////////