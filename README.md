# Forest cover change assessment for various locations in Latin America & the Caribbean

[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.16232223.svg)](https://doi.org/10.5281/zenodo.16232223)
[![Update](https://img.shields.io/github/last-commit/bzgeo/forest_cover_change?label=repo%20last%20updated&style=flat-square)](https://github.com/BzGEO/forest_cover_change)
![Visitor Badge](https://visitor-badge.laobi.icu/badge?page_id=bzgeo.forest_cover_change)

## Summary
This is a collection of [Google Earth Engine (GEE)](https://code.earthengine.google.com/) code for forest cover change mapping, based on the LandTrendr algorithm from Kennedy et al. (2010) and Kennedy et al. (2018). The geographic scope of this work includes: (i) the Department of Ucayali in Peru, (ii) the nation of Belize, and (iii) the region of Mesoamerica (i.e., southern Mexico to Panama). The time period for the analyses is 1984 to 2025, focusing on the dry season, which for Belize and Mesoamerica runs from about January to May of each year, and for Ucayali runs from May to October.

# Methods
Using Kennedy et al. (2018)'s *LandTrendr* algorithm available via the Google Earth Engine (GEE) computational platform, temporally stabilized Landsat mosaics were generated for the entire period of available Landsat-5 to Landsat-9 data (i.e., 1984 to 2025), and using standard parameters for deriving the mosaics. The derived mosaics included the following 6 spectral bands: blue, green, red, near infrared (NIR), shortwave infrared-1 (SWIR1), and shortwave infrared-2 (SWIR2). In addition to the temporally stabilized image mosaics, rasterized maps of land cover change were also derived using the Normalized Burn Ratio (NBR) and standard parameters. The maps included bands detailing the years that the disturbances were detected ("year of disturbance," YOD), and the magnitude of NBR change, and the duration of the changes, among other parameters. Spectral mixture analysis (SMA) was then performed on the 42 individual annual Landsat mosaics, generating 3-band raster composites representing per pixel percentages of photosynthetic vegetation (PV), non-photosynthetic vegetation (NPV), and bare substrate; for the specific spectral endmembers used, see: https://bit.ly/algorithm_sma_gee. Based on the SMA outputs for each year, and mirroring the approach taken by [Asner et al. (2009)](https://doi.org/10.1117/1.3223675), annual maps of forest and non-forest cover were then derived based on the fractions of PV. For the apps shown below, forest cover is estimated using pixels whose PV fractions meet or exceed 70%, but that forest definition can be revisited by adjusting the PV fractions of the SMA outputs.

## Functions

As displayed below, the code repository is divided into four sections. There are scripts for:

1. Loading Landsat mosaics and derived products (spectral mixture analysis outputs, and forest cover maps),
2. Generating dry season Landsat mosaics using Kennedy et al.'s LandTrendr-based temporal stabilization algorithm,
3. Generating land cover change maps based on LandTrendr, and
4. Generating user interfaces (UIs) for producing GEE apps for visualizing the mosaics, SMA outputs, and forest cover data.

![](https://github.com/BzGEO/forest_cover_change/blob/main/_graphics/gee_repo_structure_2.png)

## 📢 Add this repo to Google Earth Engine 📢
To add the code repository 💾 directly to your GEE account, use the following *bit.ly* 🔗: https://bit.ly/gee_forest_cover.

## Additional information

1. There are three GEE apps for viewing the analyses' outputs:
   
  * Belize forest cover change [app](https://bzgeo.users.earthengine.app/view/bz-forest-cover-landsat) ➡️ *based on 30m Landsat data*

![](https://github.com/BzGEO/forest_cover_change/blob/main/_graphics/app_screenshot_bz_1.png)
    
  * Mesoamerica forest cover change [app](https://bzgeo.users.earthengine.app/view/mes-fcover-landsat) ➡️ *based on 100m Landsat data*

![](https://github.com/BzGEO/forest_cover_change/blob/main/_graphics/app_screenshot_mes_2.png)

   * Ucayali, Peru forest cover change [app](https://bit.ly/pe_ucayali) ➡️ *based on 100m Landsat data*

![](https://github.com/BzGEO/forest_cover_change/blob/main/_graphics/app_screenshot_pe_3.png)

2. There is *also* a Mesoamerica-focused app for viewing Landsat spectral signatures based on the 42 annual image mosaics: https://geo-ai.net/multispectral_landsat.

![](https://github.com/BzGEO/forest_cover_change/blob/main/_graphics/app_screenshot_mes_3.png)

3. You can access the **large** data cubes (image stacks) of Landsat data that were generated via the scripts in the **00_pkg** folder of the [GEE repository](https://bit.ly/gee_forest_cover).

![](https://github.com/BzGEO/forest_cover_change/blob/main/_graphics/data_cube_bz.png)

![](https://github.com/BzGEO/forest_cover_change/blob/main/_graphics/data_cube_mes.png)

4. See Kennedy et al.'s papers for additional details regarding the LandTrendr methods:

   * Kennedy et al. (2010): https://www.sciencedirect.com/science/article/abs/pii/S0034425710002245

   * Kennedy et al. (2018): https://www.mdpi.com/2072-4292/10/5/691

5. The [eMapR Lab](https://emapr.ceoas.oregonstate.edu/) at [Oregon State University](https://oregonstate.edu/) also has great resources on LandTrendr that we highly recommend: https://emapr.github.io/LT-GEE/landtrendr.html.

## Context
These scripts were originally developed in the 2020-2024 timeframe at the [SERVIR](https://science.nasa.gov/category/missions/servir/) Science Coordination Office at the [NASA Marshall Space Flight Center](https://www.nasa.gov/marshall/) for collaborative work done in Central America and Amazonia. The scripts were recently updated to the 2025 dry season. This work also builds off of the Global Land Cover Change Algorithm Intercomparison effort implemented across the SERVIR network in the 2021-2023 timeframe, and led by Drs. [Africa Flores-Anderson](https://github.com/africaf) of NASA MSFC, and Stephanie Spera and [Yunuen Reygadas Langarica](https://github.com/yreygadas) of the University of Richmond.

## Citation

If this toolkit is used in publications, presentations, or other venues, please cite 📝 the following:

Cherrington, E. A., Hernandez Sandoval, B. E., Flores-Anderson, A. I., Anderson, E. R., Herndon, K. E., Limaye, A. S., Griffin, R. E., & Irwin, D. E. (2025). Forest cover change code and tools (Version 1.0.0.0) [Computer software]. https://doi.org/10.5281/zenodo.16232223

[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.16232223.svg)](https://doi.org/10.5281/zenodo.16232223)

## Contact information

If you have any questions, feel free to contact Emil Cherrington by :envelope_with_arrow: email: **emil.cherrington [at] uah.edu**.
