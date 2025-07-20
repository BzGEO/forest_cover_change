# Forest cover change assessment for Belize and Mesoamerica

[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.15873995.svg)](https://doi.org/10.5281/zenodo.15873995)
[![Update](https://img.shields.io/github/last-commit/bzgeo/forest_cover_change?label=repo%20last%20updated&style=flat-square)](https://github.com/BzGEO/forest_cover_change)
![Visitor Badge](https://visitor-badge.laobi.icu/badge?page_id=bzgeo.forest_cover_change)

## Summary
This is a collection of Google Earth Engine (GEE) code for forest cover change mapping, based on the LandTrendr algorithm from Kennedy et al. (2010) and Kennedy et al. (2018). The geographic scope of this work is the nation of Belize, and Mesoamerica (i.e., southern Mexico to Panama). The time period for the analyses is 1984 to 2025.

## Functions

As displayed below, the code repository is divided into four sections. There are scripts for:

1. Loading Landsat mosaics and derived products (spectral mixture analysis outputs, and forest cover maps),
2. Generating dry season Landsat mosaics using Kennedy et al.'s LandTrendr-based temporal stabilization algorithm,
3. Generating land cover change maps based on LandTrendr, and
4. Generating user interfaces (UIs) for producing GEE apps for visualizing the mosaics, SMA outputs, and forest cover data.

![](https://github.com/BzGEO/forest_cover_change/blob/main/_graphics/gee_repo_structure.png)

## 📢 Add this repo to Google Earth Engine 📢
To add the code repository 💾 directly to your GEE account, use the following *bit.ly* 🔗: https://bit.ly/gee_forest_cover.

## Additional information

1. There are two GEE apps for viewing the analyses' outputs:
   
  * Belize forest cover change [app](https://bzgeo.users.earthengine.app/view/bz-forest-cover-landsat) ➡️ *based on 30m Landsat data*

![](https://github.com/BzGEO/forest_cover_change/blob/main/_graphics/app_screenshot_bz_1.png)
    
  * Mesoamerica forest cover change [app](https://bzgeo.users.earthengine.app/view/mes-fcover-landsat) ➡️ *based on 100m Landsat data*

![](https://github.com/BzGEO/forest_cover_change/blob/main/_graphics/app_screenshot_mes_2.png)

2. You can access the **large** data cubes (image stacks) of Landsat data that were generated via the scripts in the **00_pkg** folder of the [GEE repository](https://bit.ly/gee_forest_cover).

![](https://github.com/BzGEO/forest_cover_change/blob/main/_graphics/data_cube_bz.png)

![](https://github.com/BzGEO/forest_cover_change/blob/main/_graphics/data_cube_mes.png)

3. See Kennedy et al.'s papers for additional details regarding the LandTrendr methods:

   * Kennedy et al. (2010): https://www.sciencedirect.com/science/article/abs/pii/S0034425710002245

   * Kennedy et al. (2018): https://www.mdpi.com/2072-4292/10/5/691

## Citation

If this toolkit is used in publications, presentations, or other venues, please cite 📝 the following:



[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.15873995.svg)](https://doi.org/10.5281/zenodo.15873995)

## Contact information

If you have any questions, feel free to contact Emil Cherrington by :envelope_with_arrow: email: **emil.cherrington [at] uah.edu**.
