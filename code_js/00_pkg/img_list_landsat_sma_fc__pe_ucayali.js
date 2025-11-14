/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//* This script imports collections of optical imagery for generating veg. indices *//
// Last modified: 13.11.2025

// var c = require('users/servirbz/packages:img_list_landsat_sma_fc__pe');

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 
var a = require('users/bzgeo/examples:_ancillary/mes');
var b = require('users/servirbz/packages:sma_std3');

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var roi = ee.FeatureCollection("projects/servir-sco-assets/assets/ucayali");
exports.roi = roi;

// Palette for LandTrendr data
var pal_lt = {min: 1984, max: 2025, palette: ['#9400D3', '#4B0082', '#0000FF', '#00FF00', '#FFFF00', '#FF7F00', '#FF0000']};
var pal_lt_2000_2025 = {min: 2000, max: 2025, palette: ['#9400D3', '#4B0082', '#0000FF', '#00FF00', '#FFFF00', '#FF7F00', '#FF0000']};


// LandTrendr change data
var lt_030m = ee.Image("users/servirbz/x_tmp/pe_ucayali_defor_lt_nbr_1984_2025_100m__1103_gcs").select('yod');
var lt_030m_2000_2025 = lt_030m.updateMask(lt_030m.gte(2000));

// Image data cube
var lt_stack = ee.Image(
  "projects/bz-sdg/compil_imagery/optical/landsat_ft/pe_ucayali_landsat_boa_fitted_r70_1984_2025_1112_100m").clip(roi);

// Exports
exports.lt_stack = lt_stack;
exports.lt_030m = lt_030m;
exports.lt_030m_2000_2025 = lt_030m_2000_2025;
exports.pal_lt = pal_lt;
exports.pal_lt_2000_2025 = pal_lt_2000_2025;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var landsat_1984 = lt_stack.select(['B1_1984','B2_1984','B3_1984','B4_1984','B5_1984','B7_1984'],['B1','B2','B3','B4','B5','B7']);
var landsat_1985 = lt_stack.select(['B1_1985','B2_1985','B3_1985','B4_1985','B5_1985','B7_1985'],['B1','B2','B3','B4','B5','B7']);
var landsat_1986 = lt_stack.select(['B1_1986','B2_1986','B3_1986','B4_1986','B5_1986','B7_1986'],['B1','B2','B3','B4','B5','B7']);
var landsat_1987 = lt_stack.select(['B1_1987','B2_1987','B3_1987','B4_1987','B5_1987','B7_1987'],['B1','B2','B3','B4','B5','B7']);
var landsat_1988 = lt_stack.select(['B1_1988','B2_1988','B3_1988','B4_1988','B5_1988','B7_1988'],['B1','B2','B3','B4','B5','B7']);
var landsat_1989 = lt_stack.select(['B1_1989','B2_1989','B3_1989','B4_1989','B5_1989','B7_1989'],['B1','B2','B3','B4','B5','B7']);
var landsat_1990 = lt_stack.select(['B1_1990','B2_1990','B3_1990','B4_1990','B5_1990','B7_1990'],['B1','B2','B3','B4','B5','B7']);
var landsat_1991 = lt_stack.select(['B1_1991','B2_1991','B3_1991','B4_1991','B5_1991','B7_1991'],['B1','B2','B3','B4','B5','B7']);
var landsat_1992 = lt_stack.select(['B1_1992','B2_1992','B3_1992','B4_1992','B5_1992','B7_1992'],['B1','B2','B3','B4','B5','B7']);
var landsat_1993 = lt_stack.select(['B1_1993','B2_1993','B3_1993','B4_1993','B5_1993','B7_1993'],['B1','B2','B3','B4','B5','B7']);
var landsat_1994 = lt_stack.select(['B1_1994','B2_1994','B3_1994','B4_1994','B5_1994','B7_1994'],['B1','B2','B3','B4','B5','B7']);
var landsat_1995 = lt_stack.select(['B1_1995','B2_1995','B3_1995','B4_1995','B5_1995','B7_1995'],['B1','B2','B3','B4','B5','B7']);
var landsat_1996 = lt_stack.select(['B1_1996','B2_1996','B3_1996','B4_1996','B5_1996','B7_1996'],['B1','B2','B3','B4','B5','B7']);
var landsat_1997 = lt_stack.select(['B1_1997','B2_1997','B3_1997','B4_1997','B5_1997','B7_1997'],['B1','B2','B3','B4','B5','B7']);
var landsat_1998 = lt_stack.select(['B1_1998','B2_1998','B3_1998','B4_1998','B5_1998','B7_1998'],['B1','B2','B3','B4','B5','B7']);
var landsat_1999 = lt_stack.select(['B1_1999','B2_1999','B3_1999','B4_1999','B5_1999','B7_1999'],['B1','B2','B3','B4','B5','B7']);
var landsat_2000 = lt_stack.select(['B1_2000','B2_2000','B3_2000','B4_2000','B5_2000','B7_2000'],['B1','B2','B3','B4','B5','B7']);
var landsat_2001 = lt_stack.select(['B1_2001','B2_2001','B3_2001','B4_2001','B5_2001','B7_2001'],['B1','B2','B3','B4','B5','B7']);
var landsat_2002 = lt_stack.select(['B1_2002','B2_2002','B3_2002','B4_2002','B5_2002','B7_2002'],['B1','B2','B3','B4','B5','B7']);
var landsat_2003 = lt_stack.select(['B1_2003','B2_2003','B3_2003','B4_2003','B5_2003','B7_2003'],['B1','B2','B3','B4','B5','B7']);
var landsat_2004 = lt_stack.select(['B1_2004','B2_2004','B3_2004','B4_2004','B5_2004','B7_2004'],['B1','B2','B3','B4','B5','B7']);
var landsat_2005 = lt_stack.select(['B1_2005','B2_2005','B3_2005','B4_2005','B5_2005','B7_2005'],['B1','B2','B3','B4','B5','B7']);
var landsat_2006 = lt_stack.select(['B1_2006','B2_2006','B3_2006','B4_2006','B5_2006','B7_2006'],['B1','B2','B3','B4','B5','B7']);
var landsat_2007 = lt_stack.select(['B1_2007','B2_2007','B3_2007','B4_2007','B5_2007','B7_2007'],['B1','B2','B3','B4','B5','B7']);
var landsat_2008 = lt_stack.select(['B1_2008','B2_2008','B3_2008','B4_2008','B5_2008','B7_2008'],['B1','B2','B3','B4','B5','B7']);
var landsat_2009 = lt_stack.select(['B1_2009','B2_2009','B3_2009','B4_2009','B5_2009','B7_2009'],['B1','B2','B3','B4','B5','B7']);
var landsat_2010 = lt_stack.select(['B1_2010','B2_2010','B3_2010','B4_2010','B5_2010','B7_2010'],['B1','B2','B3','B4','B5','B7']);
var landsat_2011 = lt_stack.select(['B1_2011','B2_2011','B3_2011','B4_2011','B5_2011','B7_2011'],['B1','B2','B3','B4','B5','B7']);
var landsat_2012 = lt_stack.select(['B1_2012','B2_2012','B3_2012','B4_2012','B5_2012','B7_2012'],['B1','B2','B3','B4','B5','B7']);
var landsat_2013 = lt_stack.select(['B1_2013','B2_2013','B3_2013','B4_2013','B5_2013','B7_2013'],['B1','B2','B3','B4','B5','B7']);
var landsat_2014 = lt_stack.select(['B1_2014','B2_2014','B3_2014','B4_2014','B5_2014','B7_2014'],['B1','B2','B3','B4','B5','B7']);
var landsat_2015 = lt_stack.select(['B1_2015','B2_2015','B3_2015','B4_2015','B5_2015','B7_2015'],['B1','B2','B3','B4','B5','B7']);
var landsat_2016 = lt_stack.select(['B1_2016','B2_2016','B3_2016','B4_2016','B5_2016','B7_2016'],['B1','B2','B3','B4','B5','B7']);
var landsat_2017 = lt_stack.select(['B1_2017','B2_2017','B3_2017','B4_2017','B5_2017','B7_2017'],['B1','B2','B3','B4','B5','B7']);
var landsat_2018 = lt_stack.select(['B1_2018','B2_2018','B3_2018','B4_2018','B5_2018','B7_2018'],['B1','B2','B3','B4','B5','B7']);
var landsat_2019 = lt_stack.select(['B1_2019','B2_2019','B3_2019','B4_2019','B5_2019','B7_2019'],['B1','B2','B3','B4','B5','B7']);
var landsat_2020 = lt_stack.select(['B1_2020','B2_2020','B3_2020','B4_2020','B5_2020','B7_2020'],['B1','B2','B3','B4','B5','B7']);
var landsat_2021 = lt_stack.select(['B1_2021','B2_2021','B3_2021','B4_2021','B5_2021','B7_2021'],['B1','B2','B3','B4','B5','B7']);
var landsat_2022 = lt_stack.select(['B1_2022','B2_2022','B3_2022','B4_2022','B5_2022','B7_2022'],['B1','B2','B3','B4','B5','B7']);
var landsat_2023 = lt_stack.select(['B1_2023','B2_2023','B3_2023','B4_2023','B5_2023','B7_2023'],['B1','B2','B3','B4','B5','B7']);
var landsat_2024 = lt_stack.select(['B1_2024','B2_2024','B3_2024','B4_2024','B5_2024','B7_2024'],['B1','B2','B3','B4','B5','B7']);
var landsat_2025 = lt_stack.select(['B1_2025','B2_2025','B3_2025','B4_2025','B5_2025','B7_2025'],['B1','B2','B3','B4','B5','B7']);
//var landsat_2026 = lt_stack.select(['B1_2026','B2_2026','B3_2026','B4_2026','B5_2026','B7_2026'],['B1','B2','B3','B4','B5','B7']);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var img_raw = {
'1984': landsat_1984,
'1985': landsat_1985,
'1986': landsat_1986,
'1987': landsat_1987,
'1988': landsat_1988,
'1989': landsat_1989,
'1990': landsat_1990,
'1991': landsat_1991,
'1992': landsat_1992,
'1993': landsat_1993,
'1994': landsat_1994,
'1995': landsat_1995,
'1996': landsat_1996,
'1997': landsat_1997,
'1998': landsat_1998,
'1999': landsat_1999,
'2000': landsat_2000,
'2001': landsat_2001,
'2002': landsat_2002,
'2003': landsat_2003,
'2004': landsat_2004,
'2005': landsat_2005,
'2006': landsat_2006,
'2007': landsat_2007,
'2008': landsat_2008,
'2009': landsat_2009,
'2010': landsat_2010,
'2011': landsat_2011,
'2012': landsat_2012,
'2013': landsat_2013,
'2014': landsat_2014,
'2015': landsat_2015,
'2016': landsat_2016,
'2017': landsat_2017,
'2018': landsat_2018,
'2019': landsat_2019,
'2020': landsat_2020,
'2021': landsat_2021,
'2022': landsat_2022,
'2023': landsat_2023,
'2024': landsat_2024,
'2025': landsat_2025,
//'2026': landsat_2026,
};

exports.img_raw = img_raw;

var img_sma = {
'1984': b.sma_(landsat_1984),
'1985': b.sma_(landsat_1985),
'1986': b.sma_(landsat_1986),
'1987': b.sma_(landsat_1987),
'1988': b.sma_(landsat_1988),
'1989': b.sma_(landsat_1989),
'1990': b.sma_(landsat_1990),
'1991': b.sma_(landsat_1991),
'1992': b.sma_(landsat_1992),
'1993': b.sma_(landsat_1993),
'1994': b.sma_(landsat_1994),
'1995': b.sma_(landsat_1995),
'1996': b.sma_(landsat_1996),
'1997': b.sma_(landsat_1997),
'1998': b.sma_(landsat_1998),
'1999': b.sma_(landsat_1999),
'2000': b.sma_(landsat_2000),
'2001': b.sma_(landsat_2001),
'2002': b.sma_(landsat_2002),
'2003': b.sma_(landsat_2003),
'2004': b.sma_(landsat_2004),
'2005': b.sma_(landsat_2005),
'2006': b.sma_(landsat_2006),
'2007': b.sma_(landsat_2007),
'2008': b.sma_(landsat_2008),
'2009': b.sma_(landsat_2009),
'2010': b.sma_(landsat_2010),
'2011': b.sma_(landsat_2011),
'2012': b.sma_(landsat_2012),
'2013': b.sma_(landsat_2013),
'2014': b.sma_(landsat_2014),
'2015': b.sma_(landsat_2015),
'2016': b.sma_(landsat_2016),
'2017': b.sma_(landsat_2017),
'2018': b.sma_(landsat_2018),
'2019': b.sma_(landsat_2019),
'2020': b.sma_(landsat_2020),
'2021': b.sma_(landsat_2021),
'2022': b.sma_(landsat_2022),
'2023': b.sma_(landsat_2023),
'2024': b.sma_(landsat_2024),
'2025': b.sma_(landsat_2025),
//'2026': b.sma_(landsat_2026),
};

exports.img_sma = img_sma;

var img_for = {
'1984': b.for_sma_60(b.sma_(landsat_1984)).visualize({min:0,max:1,palette:['salmon','green']}),
'1985': b.for_sma_60(b.sma_(landsat_1985)).visualize({min:0,max:1,palette:['salmon','green']}),
'1986': b.for_sma_60(b.sma_(landsat_1986)).visualize({min:0,max:1,palette:['salmon','green']}),
'1987': b.for_sma_60(b.sma_(landsat_1987)).visualize({min:0,max:1,palette:['salmon','green']}),
'1988': b.for_sma_60(b.sma_(landsat_1988)).visualize({min:0,max:1,palette:['salmon','green']}),
'1989': b.for_sma_60(b.sma_(landsat_1989)).visualize({min:0,max:1,palette:['salmon','green']}),
'1990': b.for_sma_60(b.sma_(landsat_1990)).visualize({min:0,max:1,palette:['salmon','green']}),
'1991': b.for_sma_60(b.sma_(landsat_1991)).visualize({min:0,max:1,palette:['salmon','green']}),
'1992': b.for_sma_60(b.sma_(landsat_1992)).visualize({min:0,max:1,palette:['salmon','green']}),
'1993': b.for_sma_60(b.sma_(landsat_1993)).visualize({min:0,max:1,palette:['salmon','green']}),
'1994': b.for_sma_60(b.sma_(landsat_1994)).visualize({min:0,max:1,palette:['salmon','green']}),
'1995': b.for_sma_60(b.sma_(landsat_1995)).visualize({min:0,max:1,palette:['salmon','green']}),
'1996': b.for_sma_60(b.sma_(landsat_1996)).visualize({min:0,max:1,palette:['salmon','green']}),
'1997': b.for_sma_60(b.sma_(landsat_1997)).visualize({min:0,max:1,palette:['salmon','green']}),
'1998': b.for_sma_60(b.sma_(landsat_1998)).visualize({min:0,max:1,palette:['salmon','green']}),
'1999': b.for_sma_60(b.sma_(landsat_1999)).visualize({min:0,max:1,palette:['salmon','green']}),
'2000': b.for_sma_60(b.sma_(landsat_2000)).visualize({min:0,max:1,palette:['salmon','green']}),
'2001': b.for_sma_60(b.sma_(landsat_2001)).visualize({min:0,max:1,palette:['salmon','green']}),
'2002': b.for_sma_60(b.sma_(landsat_2002)).visualize({min:0,max:1,palette:['salmon','green']}),
'2003': b.for_sma_60(b.sma_(landsat_2003)).visualize({min:0,max:1,palette:['salmon','green']}),
'2004': b.for_sma_60(b.sma_(landsat_2004)).visualize({min:0,max:1,palette:['salmon','green']}),
'2005': b.for_sma_60(b.sma_(landsat_2005)).visualize({min:0,max:1,palette:['salmon','green']}),
'2006': b.for_sma_60(b.sma_(landsat_2006)).visualize({min:0,max:1,palette:['salmon','green']}),
'2007': b.for_sma_60(b.sma_(landsat_2007)).visualize({min:0,max:1,palette:['salmon','green']}),
'2008': b.for_sma_60(b.sma_(landsat_2008)).visualize({min:0,max:1,palette:['salmon','green']}),
'2009': b.for_sma_60(b.sma_(landsat_2009)).visualize({min:0,max:1,palette:['salmon','green']}),
'2010': b.for_sma_60(b.sma_(landsat_2010)).visualize({min:0,max:1,palette:['salmon','green']}),
'2011': b.for_sma_60(b.sma_(landsat_2011)).visualize({min:0,max:1,palette:['salmon','green']}),
'2012': b.for_sma_60(b.sma_(landsat_2012)).visualize({min:0,max:1,palette:['salmon','green']}),
'2013': b.for_sma_60(b.sma_(landsat_2013)).visualize({min:0,max:1,palette:['salmon','green']}),
'2014': b.for_sma_60(b.sma_(landsat_2014)).visualize({min:0,max:1,palette:['salmon','green']}),
'2015': b.for_sma_60(b.sma_(landsat_2015)).visualize({min:0,max:1,palette:['salmon','green']}),
'2016': b.for_sma_60(b.sma_(landsat_2016)).visualize({min:0,max:1,palette:['salmon','green']}),
'2017': b.for_sma_60(b.sma_(landsat_2017)).visualize({min:0,max:1,palette:['salmon','green']}),
'2018': b.for_sma_60(b.sma_(landsat_2018)).visualize({min:0,max:1,palette:['salmon','green']}),
'2019': b.for_sma_60(b.sma_(landsat_2019)).visualize({min:0,max:1,palette:['salmon','green']}),
'2020': b.for_sma_60(b.sma_(landsat_2020)).visualize({min:0,max:1,palette:['salmon','green']}),
'2021': b.for_sma_60(b.sma_(landsat_2021)).visualize({min:0,max:1,palette:['salmon','green']}),
'2022': b.for_sma_60(b.sma_(landsat_2022)).visualize({min:0,max:1,palette:['salmon','green']}),
'2023': b.for_sma_60(b.sma_(landsat_2023)).visualize({min:0,max:1,palette:['salmon','green']}),
'2024': b.for_sma_60(b.sma_(landsat_2024)).visualize({min:0,max:1,palette:['salmon','green']}),
'2025': b.for_sma_60(b.sma_(landsat_2025)).visualize({min:0,max:1,palette:['salmon','green']}),
//'2026': b.for_sma_60(b.sma_(landsat_2026)).visualize({min:0,max:1,palette:['salmon','green']}),
};

exports.img_for = img_for;

/*
var img_for2 = {
'1984': b.for_sma_60(b.sma_(landsat_1984)).visualize({min:0,max:1,palette:['salmon','green']}).multiply(a.hill_mes_),
'1985': b.for_sma_60(b.sma_(landsat_1985)).visualize({min:0,max:1,palette:['salmon','green']}).multiply(a.hill_mes_),
'1986': b.for_sma_60(b.sma_(landsat_1986)).visualize({min:0,max:1,palette:['salmon','green']}).multiply(a.hill_mes_),
'1987': b.for_sma_60(b.sma_(landsat_1987)).visualize({min:0,max:1,palette:['salmon','green']}).multiply(a.hill_mes_),
'1988': b.for_sma_60(b.sma_(landsat_1988)).visualize({min:0,max:1,palette:['salmon','green']}).multiply(a.hill_mes_),
'1989': b.for_sma_60(b.sma_(landsat_1989)).visualize({min:0,max:1,palette:['salmon','green']}).multiply(a.hill_mes_),
'1990': b.for_sma_60(b.sma_(landsat_1990)).visualize({min:0,max:1,palette:['salmon','green']}).multiply(a.hill_mes_),
'1991': b.for_sma_60(b.sma_(landsat_1991)).visualize({min:0,max:1,palette:['salmon','green']}).multiply(a.hill_mes_),
'1992': b.for_sma_60(b.sma_(landsat_1992)).visualize({min:0,max:1,palette:['salmon','green']}).multiply(a.hill_mes_),
'1993': b.for_sma_60(b.sma_(landsat_1993)).visualize({min:0,max:1,palette:['salmon','green']}).multiply(a.hill_mes_),
'1994': b.for_sma_60(b.sma_(landsat_1994)).visualize({min:0,max:1,palette:['salmon','green']}).multiply(a.hill_mes_),
'1995': b.for_sma_60(b.sma_(landsat_1995)).visualize({min:0,max:1,palette:['salmon','green']}).multiply(a.hill_mes_),
'1996': b.for_sma_60(b.sma_(landsat_1996)).visualize({min:0,max:1,palette:['salmon','green']}).multiply(a.hill_mes_),
'1997': b.for_sma_60(b.sma_(landsat_1997)).visualize({min:0,max:1,palette:['salmon','green']}).multiply(a.hill_mes_),
'1998': b.for_sma_60(b.sma_(landsat_1998)).visualize({min:0,max:1,palette:['salmon','green']}).multiply(a.hill_mes_),
'1999': b.for_sma_60(b.sma_(landsat_1999)).visualize({min:0,max:1,palette:['salmon','green']}).multiply(a.hill_mes_),
'2000': b.for_sma_60(b.sma_(landsat_2000)).visualize({min:0,max:1,palette:['salmon','green']}).multiply(a.hill_mes_),
'2001': b.for_sma_60(b.sma_(landsat_2001)).visualize({min:0,max:1,palette:['salmon','green']}).multiply(a.hill_mes_),
'2002': b.for_sma_60(b.sma_(landsat_2002)).visualize({min:0,max:1,palette:['salmon','green']}).multiply(a.hill_mes_),
'2003': b.for_sma_60(b.sma_(landsat_2003)).visualize({min:0,max:1,palette:['salmon','green']}).multiply(a.hill_mes_),
'2004': b.for_sma_60(b.sma_(landsat_2004)).visualize({min:0,max:1,palette:['salmon','green']}).multiply(a.hill_mes_),
'2005': b.for_sma_60(b.sma_(landsat_2005)).visualize({min:0,max:1,palette:['salmon','green']}).multiply(a.hill_mes_),
'2006': b.for_sma_60(b.sma_(landsat_2006)).visualize({min:0,max:1,palette:['salmon','green']}).multiply(a.hill_mes_),
'2007': b.for_sma_60(b.sma_(landsat_2007)).visualize({min:0,max:1,palette:['salmon','green']}).multiply(a.hill_mes_),
'2008': b.for_sma_60(b.sma_(landsat_2008)).visualize({min:0,max:1,palette:['salmon','green']}).multiply(a.hill_mes_),
'2009': b.for_sma_60(b.sma_(landsat_2009)).visualize({min:0,max:1,palette:['salmon','green']}).multiply(a.hill_mes_),
'2010': b.for_sma_60(b.sma_(landsat_2010)).visualize({min:0,max:1,palette:['salmon','green']}).multiply(a.hill_mes_),
'2011': b.for_sma_60(b.sma_(landsat_2011)).visualize({min:0,max:1,palette:['salmon','green']}).multiply(a.hill_mes_),
'2012': b.for_sma_60(b.sma_(landsat_2012)).visualize({min:0,max:1,palette:['salmon','green']}).multiply(a.hill_mes_),
'2013': b.for_sma_60(b.sma_(landsat_2013)).visualize({min:0,max:1,palette:['salmon','green']}).multiply(a.hill_mes_),
'2014': b.for_sma_60(b.sma_(landsat_2014)).visualize({min:0,max:1,palette:['salmon','green']}).multiply(a.hill_mes_),
'2015': b.for_sma_60(b.sma_(landsat_2015)).visualize({min:0,max:1,palette:['salmon','green']}).multiply(a.hill_mes_),
'2016': b.for_sma_60(b.sma_(landsat_2016)).visualize({min:0,max:1,palette:['salmon','green']}).multiply(a.hill_mes_),
'2017': b.for_sma_60(b.sma_(landsat_2017)).visualize({min:0,max:1,palette:['salmon','green']}).multiply(a.hill_mes_),
'2018': b.for_sma_60(b.sma_(landsat_2018)).visualize({min:0,max:1,palette:['salmon','green']}).multiply(a.hill_mes_),
'2019': b.for_sma_60(b.sma_(landsat_2019)).visualize({min:0,max:1,palette:['salmon','green']}).multiply(a.hill_mes_),
'2020': b.for_sma_60(b.sma_(landsat_2020)).visualize({min:0,max:1,palette:['salmon','green']}).multiply(a.hill_mes_),
'2021': b.for_sma_60(b.sma_(landsat_2021)).visualize({min:0,max:1,palette:['salmon','green']}).multiply(a.hill_mes_),
'2022': b.for_sma_60(b.sma_(landsat_2022)).visualize({min:0,max:1,palette:['salmon','green']}).multiply(a.hill_mes_),
'2023': b.for_sma_60(b.sma_(landsat_2023)).visualize({min:0,max:1,palette:['salmon','green']}).multiply(a.hill_mes_),
'2024': b.for_sma_60(b.sma_(landsat_2024)).visualize({min:0,max:1,palette:['salmon','green']}).multiply(a.hill_mes_),
'2025': b.for_sma_60(b.sma_(landsat_2025)).visualize({min:0,max:1,palette:['salmon','green']}).multiply(a.hill_mes_),
//'2026': b.for_sma_60(b.sma_(landsat_2026)).visualize({min:0,max:1,palette:['salmon','green']}).multiply(a.hill_mes_),
};
*/

var img_for2 = {
'1984': b.for_sma_70(b.sma_(landsat_1984)).visualize({min:0,max:1,palette:['salmon','green']}).multiply(a.hill_pe_ucayali),
'1985': b.for_sma_70(b.sma_(landsat_1985)).visualize({min:0,max:1,palette:['salmon','green']}).multiply(a.hill_pe_ucayali),
'1986': b.for_sma_70(b.sma_(landsat_1986)).visualize({min:0,max:1,palette:['salmon','green']}).multiply(a.hill_pe_ucayali),
'1987': b.for_sma_70(b.sma_(landsat_1987)).visualize({min:0,max:1,palette:['salmon','green']}).multiply(a.hill_pe_ucayali),
'1988': b.for_sma_70(b.sma_(landsat_1988)).visualize({min:0,max:1,palette:['salmon','green']}).multiply(a.hill_pe_ucayali),
'1989': b.for_sma_70(b.sma_(landsat_1989)).visualize({min:0,max:1,palette:['salmon','green']}).multiply(a.hill_pe_ucayali),
'1990': b.for_sma_70(b.sma_(landsat_1990)).visualize({min:0,max:1,palette:['salmon','green']}).multiply(a.hill_pe_ucayali),
'1991': b.for_sma_70(b.sma_(landsat_1991)).visualize({min:0,max:1,palette:['salmon','green']}).multiply(a.hill_pe_ucayali),
'1992': b.for_sma_70(b.sma_(landsat_1992)).visualize({min:0,max:1,palette:['salmon','green']}).multiply(a.hill_pe_ucayali),
'1993': b.for_sma_70(b.sma_(landsat_1993)).visualize({min:0,max:1,palette:['salmon','green']}).multiply(a.hill_pe_ucayali),
'1994': b.for_sma_70(b.sma_(landsat_1994)).visualize({min:0,max:1,palette:['salmon','green']}).multiply(a.hill_pe_ucayali),
'1995': b.for_sma_70(b.sma_(landsat_1995)).visualize({min:0,max:1,palette:['salmon','green']}).multiply(a.hill_pe_ucayali),
'1996': b.for_sma_70(b.sma_(landsat_1996)).visualize({min:0,max:1,palette:['salmon','green']}).multiply(a.hill_pe_ucayali),
'1997': b.for_sma_70(b.sma_(landsat_1997)).visualize({min:0,max:1,palette:['salmon','green']}).multiply(a.hill_pe_ucayali),
'1998': b.for_sma_70(b.sma_(landsat_1998)).visualize({min:0,max:1,palette:['salmon','green']}).multiply(a.hill_pe_ucayali),
'1999': b.for_sma_70(b.sma_(landsat_1999)).visualize({min:0,max:1,palette:['salmon','green']}).multiply(a.hill_pe_ucayali),
'2000': b.for_sma_70(b.sma_(landsat_2000)).visualize({min:0,max:1,palette:['salmon','green']}).multiply(a.hill_pe_ucayali),
'2001': b.for_sma_70(b.sma_(landsat_2001)).visualize({min:0,max:1,palette:['salmon','green']}).multiply(a.hill_pe_ucayali),
'2002': b.for_sma_70(b.sma_(landsat_2002)).visualize({min:0,max:1,palette:['salmon','green']}).multiply(a.hill_pe_ucayali),
'2003': b.for_sma_70(b.sma_(landsat_2003)).visualize({min:0,max:1,palette:['salmon','green']}).multiply(a.hill_pe_ucayali),
'2004': b.for_sma_70(b.sma_(landsat_2004)).visualize({min:0,max:1,palette:['salmon','green']}).multiply(a.hill_pe_ucayali),
'2005': b.for_sma_70(b.sma_(landsat_2005)).visualize({min:0,max:1,palette:['salmon','green']}).multiply(a.hill_pe_ucayali),
'2006': b.for_sma_70(b.sma_(landsat_2006)).visualize({min:0,max:1,palette:['salmon','green']}).multiply(a.hill_pe_ucayali),
'2007': b.for_sma_70(b.sma_(landsat_2007)).visualize({min:0,max:1,palette:['salmon','green']}).multiply(a.hill_pe_ucayali),
'2008': b.for_sma_70(b.sma_(landsat_2008)).visualize({min:0,max:1,palette:['salmon','green']}).multiply(a.hill_pe_ucayali),
'2009': b.for_sma_70(b.sma_(landsat_2009)).visualize({min:0,max:1,palette:['salmon','green']}).multiply(a.hill_pe_ucayali),
'2010': b.for_sma_70(b.sma_(landsat_2010)).visualize({min:0,max:1,palette:['salmon','green']}).multiply(a.hill_pe_ucayali),
'2011': b.for_sma_70(b.sma_(landsat_2011)).visualize({min:0,max:1,palette:['salmon','green']}).multiply(a.hill_pe_ucayali),
'2012': b.for_sma_70(b.sma_(landsat_2012)).visualize({min:0,max:1,palette:['salmon','green']}).multiply(a.hill_pe_ucayali),
'2013': b.for_sma_70(b.sma_(landsat_2013)).visualize({min:0,max:1,palette:['salmon','green']}).multiply(a.hill_pe_ucayali),
'2014': b.for_sma_70(b.sma_(landsat_2014)).visualize({min:0,max:1,palette:['salmon','green']}).multiply(a.hill_pe_ucayali),
'2015': b.for_sma_70(b.sma_(landsat_2015)).visualize({min:0,max:1,palette:['salmon','green']}).multiply(a.hill_pe_ucayali),
'2016': b.for_sma_70(b.sma_(landsat_2016)).visualize({min:0,max:1,palette:['salmon','green']}).multiply(a.hill_pe_ucayali),
'2017': b.for_sma_70(b.sma_(landsat_2017)).visualize({min:0,max:1,palette:['salmon','green']}).multiply(a.hill_pe_ucayali),
'2018': b.for_sma_70(b.sma_(landsat_2018)).visualize({min:0,max:1,palette:['salmon','green']}).multiply(a.hill_pe_ucayali),
'2019': b.for_sma_70(b.sma_(landsat_2019)).visualize({min:0,max:1,palette:['salmon','green']}).multiply(a.hill_pe_ucayali),
'2020': b.for_sma_70(b.sma_(landsat_2020)).visualize({min:0,max:1,palette:['salmon','green']}).multiply(a.hill_pe_ucayali),
'2021': b.for_sma_70(b.sma_(landsat_2021)).visualize({min:0,max:1,palette:['salmon','green']}).multiply(a.hill_pe_ucayali),
'2022': b.for_sma_70(b.sma_(landsat_2022)).visualize({min:0,max:1,palette:['salmon','green']}).multiply(a.hill_pe_ucayali),
'2023': b.for_sma_70(b.sma_(landsat_2023)).visualize({min:0,max:1,palette:['salmon','green']}).multiply(a.hill_pe_ucayali),
'2024': b.for_sma_70(b.sma_(landsat_2024)).visualize({min:0,max:1,palette:['salmon','green']}).multiply(a.hill_pe_ucayali),
'2025': b.for_sma_70(b.sma_(landsat_2025)).visualize({min:0,max:1,palette:['salmon','green']}).multiply(a.hill_pe_ucayali),
//'2026': b.for_sma_70(b.sma_(landsat_2026)).visualize({min:0,max:1,palette:['salmon','green']}).multiply(a.hill_pe_ucayali),
};
exports.img_for2 = img_for2;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var img_for3 = {
'1984': b.for_sma_70(b.sma_(landsat_1984)),
'1985': b.for_sma_70(b.sma_(landsat_1985)),
'1986': b.for_sma_70(b.sma_(landsat_1986)),
'1987': b.for_sma_70(b.sma_(landsat_1987)),
'1988': b.for_sma_70(b.sma_(landsat_1988)),
'1989': b.for_sma_70(b.sma_(landsat_1989)),
'1990': b.for_sma_70(b.sma_(landsat_1990)),
'1991': b.for_sma_70(b.sma_(landsat_1991)),
'1992': b.for_sma_70(b.sma_(landsat_1992)),
'1993': b.for_sma_70(b.sma_(landsat_1993)),
'1994': b.for_sma_70(b.sma_(landsat_1994)),
'1995': b.for_sma_70(b.sma_(landsat_1995)),
'1996': b.for_sma_70(b.sma_(landsat_1996)),
'1997': b.for_sma_70(b.sma_(landsat_1997)),
'1998': b.for_sma_70(b.sma_(landsat_1998)),
'1999': b.for_sma_70(b.sma_(landsat_1999)),
'2000': b.for_sma_70(b.sma_(landsat_2000)),
'2001': b.for_sma_70(b.sma_(landsat_2001)),
'2002': b.for_sma_70(b.sma_(landsat_2002)),
'2003': b.for_sma_70(b.sma_(landsat_2003)),
'2004': b.for_sma_70(b.sma_(landsat_2004)),
'2005': b.for_sma_70(b.sma_(landsat_2005)),
'2006': b.for_sma_70(b.sma_(landsat_2006)),
'2007': b.for_sma_70(b.sma_(landsat_2007)),
'2008': b.for_sma_70(b.sma_(landsat_2008)),
'2009': b.for_sma_70(b.sma_(landsat_2009)),
'2010': b.for_sma_70(b.sma_(landsat_2010)),
'2011': b.for_sma_70(b.sma_(landsat_2011)),
'2012': b.for_sma_70(b.sma_(landsat_2012)),
'2013': b.for_sma_70(b.sma_(landsat_2013)),
'2014': b.for_sma_70(b.sma_(landsat_2014)),
'2015': b.for_sma_70(b.sma_(landsat_2015)),
'2016': b.for_sma_70(b.sma_(landsat_2016)),
'2017': b.for_sma_70(b.sma_(landsat_2017)),
'2018': b.for_sma_70(b.sma_(landsat_2018)),
'2019': b.for_sma_70(b.sma_(landsat_2019)),
'2020': b.for_sma_70(b.sma_(landsat_2020)),
'2021': b.for_sma_70(b.sma_(landsat_2021)),
'2022': b.for_sma_70(b.sma_(landsat_2022)),
'2023': b.for_sma_70(b.sma_(landsat_2023)),
'2024': b.for_sma_70(b.sma_(landsat_2024)),
'2025': b.for_sma_70(b.sma_(landsat_2025)),
//'2026': b.for_sma_70(b.sma_(landsat_2026)),
};

exports.img_for3 = img_for3;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var fc = ee.ImageCollection.fromImages([
img_for3[1984].set('system:time_start',ee.Date.fromYMD(1984,10,31)),
img_for3[1985].set('system:time_start',ee.Date.fromYMD(1985,10,31)),
img_for3[1986].set('system:time_start',ee.Date.fromYMD(1986,10,31)),
img_for3[1987].set('system:time_start',ee.Date.fromYMD(1987,10,31)),
img_for3[1988].set('system:time_start',ee.Date.fromYMD(1988,10,31)),
img_for3[1989].set('system:time_start',ee.Date.fromYMD(1989,10,31)),
img_for3[1990].set('system:time_start',ee.Date.fromYMD(1990,10,31)),
img_for3[1991].set('system:time_start',ee.Date.fromYMD(1991,10,31)),
img_for3[1992].set('system:time_start',ee.Date.fromYMD(1992,10,31)),
img_for3[1993].set('system:time_start',ee.Date.fromYMD(1993,10,31)),
img_for3[1994].set('system:time_start',ee.Date.fromYMD(1994,10,31)),
img_for3[1995].set('system:time_start',ee.Date.fromYMD(1995,10,31)),
img_for3[1996].set('system:time_start',ee.Date.fromYMD(1996,10,31)),
img_for3[1997].set('system:time_start',ee.Date.fromYMD(1997,10,31)),
img_for3[1998].set('system:time_start',ee.Date.fromYMD(1998,10,31)),
img_for3[1999].set('system:time_start',ee.Date.fromYMD(1999,10,31)),
img_for3[2000].set('system:time_start',ee.Date.fromYMD(2000,10,31)),
img_for3[2001].set('system:time_start',ee.Date.fromYMD(2001,10,31)),
img_for3[2002].set('system:time_start',ee.Date.fromYMD(2002,10,31)),
img_for3[2003].set('system:time_start',ee.Date.fromYMD(2003,10,31)),
img_for3[2004].set('system:time_start',ee.Date.fromYMD(2004,10,31)),
img_for3[2005].set('system:time_start',ee.Date.fromYMD(2005,10,31)),
img_for3[2006].set('system:time_start',ee.Date.fromYMD(2006,10,31)),
img_for3[2007].set('system:time_start',ee.Date.fromYMD(2007,10,31)),
img_for3[2008].set('system:time_start',ee.Date.fromYMD(2008,10,31)),
img_for3[2009].set('system:time_start',ee.Date.fromYMD(2009,10,31)),
img_for3[2010].set('system:time_start',ee.Date.fromYMD(2010,10,31)),
img_for3[2011].set('system:time_start',ee.Date.fromYMD(2011,10,31)),
img_for3[2012].set('system:time_start',ee.Date.fromYMD(2012,10,31)),
img_for3[2013].set('system:time_start',ee.Date.fromYMD(2013,10,31)),
img_for3[2014].set('system:time_start',ee.Date.fromYMD(2014,10,31)),
img_for3[2015].set('system:time_start',ee.Date.fromYMD(2015,10,31)),
img_for3[2016].set('system:time_start',ee.Date.fromYMD(2016,10,31)),
img_for3[2017].set('system:time_start',ee.Date.fromYMD(2017,10,31)),
img_for3[2018].set('system:time_start',ee.Date.fromYMD(2018,10,31)),
img_for3[2019].set('system:time_start',ee.Date.fromYMD(2019,10,31)),
img_for3[2020].set('system:time_start',ee.Date.fromYMD(2020,10,31)),
img_for3[2021].set('system:time_start',ee.Date.fromYMD(2021,10,31)),
img_for3[2022].set('system:time_start',ee.Date.fromYMD(2022,10,31)),
img_for3[2023].set('system:time_start',ee.Date.fromYMD(2023,10,31)),
img_for3[2024].set('system:time_start',ee.Date.fromYMD(2024,10,31)),
img_for3[2025].set('system:time_start',ee.Date.fromYMD(2025,10,31)),
//img_for3[2026].set('system:time_start',ee.Date.fromYMD(2026,10,31)),
]);

exports.fc = fc;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var viz_543 = {bands: ['B5', 'B4', 'B3'], min: [730, 1800, -740], max:[2200, 3800, 2000] };
exports.viz_543 = viz_543;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var legend = ui.Panel({style: {position: 'bottom-left',padding: '8px 8px'}});
var legendTitle = ui.Label({value: 'Year detected',style: {fontWeight: 'bold',fontSize: '14px',margin: '0 0 0 0',padding: '0'}}); // margin: '0 0 4px 0'
legend.add(legendTitle);
var lon = ee.Image.pixelLonLat().select('latitude');
var gradient = lon.multiply((pal_lt.max-pal_lt.min)/100.0).add(pal_lt.min);
var legendImage = gradient.visualize(pal_lt);
var panel = ui.Panel({widgets: [ui.Label(pal_lt['max'])],});
legend.add(panel);
var thumbnail = ui.Thumbnail({image: legendImage,params: {bbox:'0,0,10,100', dimensions:'10x200'},style: {padding: '1px', position: 'bottom-center'}});
legend.add(thumbnail);
var panel = ui.Panel({widgets: [ui.Label(pal_lt['min'])],});
legend.add(panel);

exports.lt_legend = legend;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////