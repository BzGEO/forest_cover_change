// Last updated: 13.11.2025

var a = require('users/bzgeo/examples:_ancillary/mes');
var b = require('users/servirbz/packages:img_list_landsat_sma_fc__pe');
var c = require('users/servirbz/packages:lt_legend_2000_2025');

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var img_raw = b.img_raw;
var img_sma = b.img_sma;
var img_for = b.img_for2;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// PART 1: SET UP LEFT AND RIGHT PANEL WINDOWS
// CREATE LEFT & RIGHT MAPS
var leftMap = ui.Map();
leftMap.setOptions('TERRAIN');
leftMap.setControlVisibility(true);
var rightMap = ui.Map();
rightMap.setOptions('TERRAIN');
rightMap.setControlVisibility(true);

//
var leftSelector = addLayerSelector(leftMap, 16, 'top-left');
function addLayerSelector(mapToChange, defaultValue, position) {
  var label = ui.Label('Choose year to visualize');
  function updateMap(selection) {
    mapToChange.layers().set(0, ui.Map.Layer(img_raw[selection].visualize(b.viz_543),{},"L0_Landsat_imagery", 0));
    mapToChange.layers().set(1, ui.Map.Layer(img_sma[selection].visualize({}),{},"L1_Landsat_SMA", 0));
    mapToChange.layers().set(2, ui.Map.Layer(img_for[selection],{},"L2_Forest_cover", 1));
    mapToChange.layers().set(3, ui.Map.Layer(b.lt_030m,b.pal_lt_2000_2025,"Land Cover Change: 2000-2025 (LandTrendr)", 0));
    mapToChange.layers().set(4, ui.Map.Layer(a.pa_bz_ln2,{palette: "yellow"},"Prot. areas", 1));
    mapToChange.layers().set(5, ui.Map.Layer(a.bnds_intl_ln2,{palette: "white"},"Int'l boundaries", 1));
    }
var select = ui.Select({items: Object.keys(img_raw), onChange: updateMap});
  select.setValue(Object.keys(img_raw)[defaultValue], true);
var controlPanel = ui.Panel({widgets: [label, select], style: {position: position}});
  mapToChange.add(controlPanel);
}

var rightSelector = addLayerSelector2(rightMap, 41, 'top-right');
function addLayerSelector2(mapToChange, defaultValue, position) {
  var label = ui.Label('Choose year to visualize');
  function updateMap(selection) {
    mapToChange.layers().set(0, ui.Map.Layer(img_raw[selection].visualize(b.viz_543),{},"L0_Landsat_imagery", 0));
    mapToChange.layers().set(1, ui.Map.Layer(img_sma[selection].visualize({}),{},"L1_Landsat_SMA", 0));
    mapToChange.layers().set(2, ui.Map.Layer(img_for[selection],{},"L2_Forest_cover", 1));
    mapToChange.layers().set(3, ui.Map.Layer(b.lt_030m,b.pal_lt_2000_2025,"Land Cover Change: 2000-2025 (LandTrendr)", 0));
    mapToChange.layers().set(4, ui.Map.Layer(a.pa_bz_ln2,{palette: "yellow"},"Prot. areas", 1));
    mapToChange.layers().set(5, ui.Map.Layer(a.bnds_intl_ln2,{palette: "white"},"Int'l boundaries", 1));
    }
var select = ui.Select({items: Object.keys(img_raw), onChange: updateMap});
  select.setValue(Object.keys(img_raw)[defaultValue], true);
var controlPanel = ui.Panel({widgets: [label, select], style: {position: position}});
  mapToChange.add(controlPanel);
}

//rightMap.add(c.lt_legend);

leftMap.centerObject(b.roi, 8); // -73.5159, -9.5015, 8
rightMap.centerObject(b.roi, 8);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// PART 2: INITIATE THE SPLIT PANEL
var splitPanel = ui.SplitPanel({firstPanel:leftMap, secondPanel:rightMap, wipe:true, style:{stretch: 'both'}});

var title = ui.Label("Forest cover change, 2000-2025: Ucayali, Peru", {stretch:'horizontal',textAlign:'center',fontWeight:'bold',fontSize:'20px', color: 'green'});
var descr = ui.Label("instructions: swipe images to compare them", {stretch:'horizontal',textAlign:'center',fontSize: '13px', color: 'mediumseagreen'});
var credits = ui.Label(
  "credits: Landsat imagery © NASA, USGS, processed with Kennedy et al. (2018)'s LandTrendr algorithm; generated in 2025 by the SERVIR Science Coordination Office",
{stretch:'horizontal',textAlign:'center',fontSize: '12px', color: 'gray'},
['https://code.earthengine.google.com/d38ea591995dcbfcd9d475d80df1424f']);

var linker = ui.Map.Linker([leftMap, rightMap]);

ui.root.widgets().reset([title, descr, credits, splitPanel]);
ui.root.setLayout(ui.Panel.Layout.Flow('vertical'));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////