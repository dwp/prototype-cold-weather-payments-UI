module.exports = function (router) {

    const version = "v8";
    let journeyType = "Regular"

    // Nav defaults
    let aboutActive = false;
    let dailyActive = false;
    let weeklyActive = false;
    let searchActive = false;

    //------------------
    // Views: TODAY

    router.get('/' + version + "/daily-views/D1-daily-no-trigger", function (req, res) {
        journeyType = "No Trigger";
        console.log(journeyType);
        // Set active navigation tab
        aboutActive = false;
        dailyActive = true;
        weeklyActive = false;
        searchActive = false;
        res.render(version + "/daily-views/D1-daily-no-trigger", {
            'version': version,
            // Navigation settings
            'aboutActive': aboutActive,
            'dailyActive': dailyActive,
            'weeklyActive': weeklyActive,
            'searchActive': searchActive,
            'about': "/" + version + "/A1-about",
            'daily': "/" + version + "/daily-views/D1-daily-no-trigger",
            'weekly': "/" + version + "/weekly-views/w1-weekly-no-triggers",
            'search': "/" + version + "/search/S-search-journey-select",
        });
    });

    router.get('/' + version + "/daily-views/D2a-daily-forecasted", function (req, res) {
        // Set active navigation tab
        aboutActive = false;
        dailyActive = true;
        weeklyActive = false;
        searchActive = false;
        res.render(version + "/daily-views/D2a-daily-forecasted", {
            'version': version,
            // Navigation settings
            'aboutActive': aboutActive,
            'dailyActive': dailyActive,
            'weeklyActive': weeklyActive,
            'searchActive': searchActive,
            'about': "/" + version + "/A1-about",
            'daily': "/" + version + "/daily-views/D2a-daily-forecasted",
            'weekly': "/" + version + "/weekly-views/w2-week-with-triggers",
            'search': "/" + version + "/search/S-search-journey-select",
            // Page links
            'listStations': "/" + version + "/location-lists/LW1-weather-daily",
            'listPostcodes': "/" + version + "/location-lists/LP1-postcodes-daily",
        });
    });

    router.get('/' + version + "/daily-views/D2b-daily-forecasted-and-recorded", function (req, res) {
        // Set active navigation tab
        aboutActive = false;
        dailyActive = true;
        weeklyActive = false;
        searchActive = false;
        res.render(version + "/daily-views/D2b-daily-forecasted-and-recorded", {
            'version': version,
            // Navigation settings
            'aboutActive': aboutActive,
            'dailyActive': dailyActive,
            'weeklyActive': weeklyActive,
            'searchActive': searchActive,
            'about': "/" + version + "/A1-about",
            'daily': "/" + version + "/daily-views/D2b-daily-forecasted-and-recorded",
            'weekly': "/" + version + "/weekly-views/w2-week-with-triggers",
            'search': "/" + version + "/search/S-search-journey-select",
            // Page links
            'listStations': "/" + version + "/location-lists/LW2a-weather-daily-two-triggers",
            'listPostcodes': "/" + version + "/location-lists/LP2-postcodes-daily-two-triggers",
        });
    });

    router.get('/' + version + "/daily-views/D3-daily-non-working-day", function (req, res) {
        // Set active navigation tab
        aboutActive = false;
        dailyActive = true;
        weeklyActive = false;
        searchActive = false;
        res.render(version + "/daily-views/D3-daily-non-working-day", {
            'version': version,
            // Navigation settings
            'aboutActive': aboutActive,
            'dailyActive': dailyActive,
            'weeklyActive': weeklyActive,
            'searchActive': searchActive,
            'about': "/" + version + "/A1-about",
            'daily': "/" + version + "/daily-views/D3-daily-non-working-day",
            'weekly': "/" + version + "/weekly-views/w2-week-with-triggers",
            'search': "/" + version + "/search/S-search-journey-select",
            // Page links
            'listStations': "/" + version + "/location-lists/LW2a-weather-daily-two-triggers",
            'listPostcodes': "/" + version + "/location-lists/LP2-postcodes-daily-two-triggers",
        });
    });

    router.get('/' + version + "/daily-views/D4a-daily-next-working-day", function (req, res) {
        // Set active navigation tab
        aboutActive = false;
        dailyActive = true;
        weeklyActive = false;
        searchActive = false;
        res.render(version + "/daily-views/D4a-daily-next-working-day", {
            'version': version,
            // Navigation settings
            'aboutActive': aboutActive,
            'dailyActive': dailyActive,
            'weeklyActive': weeklyActive,
            'searchActive': searchActive,
            'about': "/" + version + "/A1-about",
            'daily': "/" + version + "/daily-views/D4a-daily-next-working-day",
            'weekly': "/" + version + "/weekly-views/w2-week-with-triggers",
            'search': "/" + version + "/search/S-search-journey-select",
            // Page links
            'listStations': "/" + version + "/location-lists/LW2a-weather-daily-two-triggers",
            'listPostcodes': "/" + version + "/location-lists/LP2-postcodes-daily-two-triggers",
        });
    });

    router.get('/' + version + "/daily-views/D5-daily-data-not-ready", function (req, res) {
        // Set active navigation tab
        aboutActive = false;
        dailyActive = true;
        weeklyActive = false;
        searchActive = false;
        res.render(version + "/daily-views/D5-daily-data-not-ready", {
            'version': version,
            // Navigation settings
            'aboutActive': aboutActive,
            'dailyActive': dailyActive,
            'weeklyActive': weeklyActive,
            'searchActive': searchActive,
            'about': "/" + version + "/A1-about",
            'daily': "/" + version + "/daily-views/D5-daily-data-not-ready",
            'weekly': "/" + version + "/weekly-views/w2-week-with-triggers",
            'search': "/" + version + "/search/S-search-journey-select",
        });
    });

    router.get('/' + version + "/daily-views/D7a-daily-problem", function (req, res) {
        // Set active navigation tab
        aboutActive = false;
        dailyActive = true;
        weeklyActive = false;
        searchActive = false;
        res.render(version + "/daily-views/D7a-daily-problem", {
            'version': version,
            // Navigation settings
            'aboutActive': aboutActive,
            'dailyActive': dailyActive,
            'weeklyActive': weeklyActive,
            'searchActive': searchActive,
            'about': "/" + version + "/A1-about",
            'daily': "/" + version + "/daily-views/D7a-daily-problem",
            'weekly': "/" + version + "/weekly-views/w2-week-with-triggers",
            'search': "/" + version + "/search/S-search-journey-select",
        });
    });

    router.get('/' + version + "/daily-views/D7b-daily-service-unavailable", function (req, res) {
        // Set active navigation tab
        aboutActive = false;
        dailyActive = true;
        weeklyActive = false;
        searchActive = false;
        res.render(version + "/daily-views/D7b-daily-service-unavailable", {
            'version': version,
            // Navigation settings
            'aboutActive': aboutActive,
            'dailyActive': dailyActive,
            'weeklyActive': weeklyActive,
            'searchActive': searchActive,
            'about': "/" + version + "/A1-about",
            'daily': "/" + version + "/daily-views/D7b-daily-service-unavailable",
            'weekly': "/" + version + "/weekly-views/w2-week-with-triggers",
            'search': "/" + version + "/search/S-search-journey-select",
        });
    });

    router.get('/' + version + "/daily-views/D7c-daily-service-unavailable", function (req, res) {
        // Set active navigation tab
        aboutActive = false;
        dailyActive = true;
        weeklyActive = false;
        searchActive = false;
        res.render(version + "/daily-views/D7c-daily-service-unavailable", {
            'version': version,
            // Navigation settings
            'aboutActive': aboutActive,
            'dailyActive': dailyActive,
            'weeklyActive': weeklyActive,
            'searchActive': searchActive,
            'about': "/" + version + "/A1-about",
            'daily': "/" + version + "/daily-views/D7c-daily-service-unavailable",
            'weekly': "/" + version + "/weekly-views/w2-week-with-triggers",
            'search': "/" + version + "/search/S-search-journey-select",
        });
    });


    router.get('/' + version + "/daily-views/DW6-daily-out-of-season", function (req, res) {
        // Set active navigation tab
        aboutActive = false;
        dailyActive = true;
        weeklyActive = false;
        searchActive = false;
        res.render(version + "/daily-views/DW6-daily-out-of-season", {
            'version': version,
            // Navigation settings
            'aboutActive': aboutActive,
            'dailyActive': dailyActive,
            'weeklyActive': weeklyActive,
            'searchActive': searchActive,
            'about': "/" + version + "/A1-about",
            'daily': "/" + version + "/daily-views/DW6-daily-out-of-season",
            'weekly': "/" + version + "/weekly-views/w2-week-with-triggers",
            'search': "/" + version + "/search/S-search-journey-select",
        });
    });





    //------------------
    // Views: WEEKLY

    router.get('/' + version + "/weekly-views/w1-weekly-no-triggers", function (req, res) {
        // Set active navigation tab
        aboutActive = false;
        dailyActive = false;
        weeklyActive = true;
        searchActive = false;
        res.render(version + "/weekly-views/w1-weekly-no-triggers", {
            'version': version,
            // Navigation settings
            'aboutActive': aboutActive,
            'dailyActive': dailyActive,
            'weeklyActive': weeklyActive,
            'searchActive': searchActive,
            'about': "/" + version + "/A1-about",
            'daily': "/" + version + "/daily-views/D1-daily-no-trigger",
            'weekly': "/" + version + "/weekly-views/w1-weekly-no-triggers",
            'search': "/" + version + "/search/S-search-journey-select",
        });
    });

    router.get('/' + version + "/weekly-views/w2-week-with-triggers", function (req, res) {
        // Set active navigation tab
        aboutActive = false;
        dailyActive = false;
        weeklyActive = true;
        searchActive = false;
        res.render(version + "/weekly-views/w2-week-with-triggers", {
            'version': version,
            // Navigation settings
            'aboutActive': aboutActive,
            'dailyActive': dailyActive,
            'weeklyActive': weeklyActive,
            'searchActive': searchActive,
            'about': "/" + version + "/A1-about",
            'daily': "/" + version + "/daily-views/D2b-daily-forecasted-and-recorded",
            'weekly': "/" + version + "/weekly-views/w2-week-with-triggers",
            'search': "/" + version + "/search/S-search-journey-select",
            // Page links
            'listStationsAll': "/" + version + "/location-lists/LW3-weather-multiple-days",
            'listPostcodesAll': "/" + version + "/location-lists/LP3-postcodes-multiple-days",
            'listStations1': "/" + version + "/location-lists/for-weekly/weather-daily-9-Feb",
            'listPostcodes1': "/" + version + "/location-lists/for-weekly/postcodes-daily-9-Feb",
            'listStations2': "/" + version + "/location-lists/for-weekly/weather-daily-8-Feb",
            'listPostcodes2': "/" + version + "/location-lists/for-weekly/postcodes-daily-8-Feb",
            'listStations3': "/" + version + "/location-lists/for-weekly/weather-daily-6-Feb",
            'listPostcodes3': "/" + version + "/location-lists/for-weekly/postcodes-daily-6-Feb",
        });
    });

    router.get('/' + version + "/location-lists/for-weekly/weather-daily-9-Feb", function (req, res) {
        res.render(version + "/location-lists/for-weekly/weather-daily-9-Feb", {
            'version': version,
            'daily': "/" + version + "/daily-views/D2b-daily-forecasted-and-recorded",
            'weekly': "/" + version + "/weekly-views/w2-week-with-triggers",
            'search': "/" + version + "/search/S-search-journey-select",
        });
    });


    //------------------
    // Views: WEATHER STATION LISTS

    router.get('/' + version + "/location-lists/LW2-weather-daily", function (req, res) {
        res.render(version + "/location-lists/LW2-weather-daily", {
            'version': version,
            'daily': "/" + version + "/daily-views/D2b-daily-forecasted",
            'weekly': "/" + version + "/weekly-views/w2-week-with-triggers",
            'search': "/" + version + "/search/S-search-journey-select",
        });
    });

    router.get('/' + version + "/location-lists/LW2a-weather-daily-two-triggers", function (req, res) {
        res.render(version + "/location-lists/LW2a-weather-daily-two-triggers", {
            'version': version,
            'daily': "/" + version + "/daily-views/D2b-daily-forecasted-and-recorded",
            'weekly': "/" + version + "/weekly-views/w2-week-with-triggers",
            'search': "/" + version + "/search/S-search-journey-select",
        });
    });

    router.get('/' + version + "/location-lists/LW3-weather-multiple-days", function (req, res) {
        res.render(version + "/location-lists/LW3-weather-multiple-days", {
            'version': version,
            'daily': "/" + version + "/daily-views/D2b-daily-forecasted-and-recorded",
            'weekly': "/" + version + "/weekly-views/w2-week-with-triggers",
            'search': "/" + version + "/search/S-search-journey-select",
        });
    });

    //------------------
    // Views: POSTCODE LISTS

    router.get('/' + version + "/location-lists/LP2-postcodes-daily", function (req, res) {
        res.render(version + "/location-lists/LP2-postcodes-daily", {
            'version': version,
            'daily': "/" + version + "/daily-views/D2b-daily-forecasted",
            'weekly': "/" + version + "/weekly-views/w2-week-with-triggers",
            'search': "/" + version + "/search/S-search-journey-select",
        });
    });

    router.get('/' + version + "/location-lists/LP2-postcodes-daily-two-triggers", function (req, res) {
        res.render(version + "/location-lists/LP2-postcodes-daily-two-triggers", {
            'version': version,
            'daily': "/" + version + "/daily-views/D2b-daily-forecasted-and-recorded",
            'weekly': "/" + version + "/weekly-views/w2-week-with-triggers",
            'search': "/" + version + "/search/S-search-journey-select",
        });
    });


    //------------------
    // Views: SEARCH JOURNEYS

    router.get('/' + version + "/search/S-search-journey-select", function (req, res) {
        // Set active navigation tab
        aboutActive = false;
        dailyActive = false;
        weeklyActive = false;
        searchActive = true;
        res.render(version + "/search/S-search-journey-select", {
            'error': req.query.error,
            'version': version,
            // Navigation settings
            'aboutActive': aboutActive,
            'dailyActive': dailyActive,
            'weeklyActive': weeklyActive,
            'searchActive': searchActive,
            'about': "/" + version + "/A1-about",
            'daily': "/" + version + "/daily-views/D2b-daily-forecasted-and-recorded",
            'weekly': "/" + version + "/weekly-views/w2-week-with-triggers",
            'search': "/" + version + "/search/S-search-journey-select",
        });

    });

    router.post('/' + version + "/search/S-search-journey-select", function (req, res) {
        var journey = req.session.data['journey-select'];
        if (journey == undefined) {
            res.redirect('/' + version + "/S-search-journey-select?error=true")
        } else if (journey == "agent") {
            res.redirect('/' + version + "/search/S1-search-citizen")
        } else {
            res.redirect('/' + version + "/search/S2a-search-when")
        }
    });

    router.get('/' + version + "/search/S1-search-citizen", function (req, res) {
        // Set active navigation tab
        aboutActive = false;
        dailyActive = false;
        weeklyActive = false;
        searchActive = false;
        if (journeyType = "No Trigger") {
            res.render(version + "/search/S1-search-citizen", {
                'error': req.query.error,
                'version': version,
                // Navigation settings
                'aboutActive': aboutActive,
                'dailyActive': dailyActive,
                'weeklyActive': weeklyActive,
                'searchActive': searchActive,
                'about': "/" + version + "/A1-about",
                'daily': "/" + version + "/daily-views/D1-daily-no-trigger",
                'weekly': "/" + version + "/weekly-views/w1-weekly-no-triggers",
                'search': "/" + version + "/search/S-search-journey-select",
            });
        } else {
            res.render(version + "/search/S1-search-citizen", {
                'error': req.query.error,
                'version': version,
                // Navigation settings
                'aboutActive': aboutActive,
                'dailyActive': dailyActive,
                'weeklyActive': weeklyActive,
                'searchActive': searchActive,
                'about': "/" + version + "/A1-about",
                'daily': "/" + version + "/daily-views/D2b-daily-forecasted-and-recorded",
                'weekly': "/" + version + "/weekly-views/w2-week-with-triggers",
                'search': "/" + version + "/search/S-search-journey-select",
            });
        }

    });

    router.post('/' + version + "/search/S1-search-citizen", function (req, res) {
        var citizenPostcode = req.session.data['citizen-postcode']
        if (citizenPostcode == undefined) {
            res.redirect('/' + version + "/search/SR1-citizen-postcode")
        } else {
            res.redirect('/' + version + "/search/SR1-citizen-postcode")
        }
    });

    router.get('/' + version + "/search/S2a-search-when", function (req, res) {
        // Set active navigation tab
        aboutActive = false;
        dailyActive = false;
        weeklyActive = false;
        searchActive = false;
        res.render(version + "/search/S2a-search-when", {
            'error1': req.query.error1,
            'version': version,
            // Navigation settings
            'aboutActive': aboutActive,
            'dailyActive': dailyActive,
            'weeklyActive': weeklyActive,
            'searchActive': searchActive,
            'about': "/" + version + "/A1-about",
            'daily': "/" + version + "/daily-views/D2b-daily-forecasted-and-recorded",
            'weekly': "/" + version + "/weekly-views/w2-week-with-triggers",
            'search': "/" + version + "/search/S-search-journey-select",
        });
    });

    router.post('/' + version + "/search/S2a-search-when", function (req, res) {
        var dateRange = req.session.data['date-range']

        if (dateRange == undefined) {
            res.redirect('/' + version + "/search/S1a-search-when?error1=true")
        } else if (dateRange == "single") {
            res.redirect('/' + version + "/search/SR2-single-day-all-locations")
        } else {
            res.redirect('/' + version + "/search/S2b-search-where")
        }
    });

    router.get('/' + version + "/search/S2b-search-where", function (req, res) {
        // Set active navigation tab
        aboutActive = false;
        dailyActive = false;
        weeklyActive = false;
        searchActive = false;
        res.render(version + "/search/S2b-search-where", {
            'error1': req.query.error1,
            'version': version,
            // Navigation settings
            'aboutActive': aboutActive,
            'dailyActive': dailyActive,
            'weeklyActive': weeklyActive,
            'searchActive': searchActive,
            'about': "/" + version + "/A1-about",
            'daily': "/" + version + "/daily-views/D2b-daily-forecasted-and-recorded",
            'weekly': "/" + version + "/weekly-views/w2-week-with-triggers",
            'search': "/" + version + "/search/S-search-journey-select",
        });
    });

    router.post('/' + version + "/search/S2b-search-where", function (req, res) {
        var location = req.session.data['location']
        var dateRange = req.session.data['date-range']
        console.log("location= " + location);
        console.log("Date=" + dateRange);

        if (location == undefined) {
            console.log("location= " + location);
            res.redirect('/' + version + "/search/S2b-search-where?error1=true")
        } else if (dateRange == "single" && location == "everywhere") {
            res.redirect('/' + version + "/search/SR2-single-day-all-locations")
        } else if (dateRange == "single" && location == "postcode") {
            res.redirect('/' + version + "/search/SR3-single-day-postcode")
        } else if (dateRange == "single" && location == "weatherStation") {
            res.redirect('/' + version + "/search/SR4-single-day-weather")
        } else if (dateRange == "range" && location == "everywhere") {
            res.redirect('/' + version + "/search/SR3a-range-all-locations")
        } else if (dateRange == "range" && location == "postcode") {
            res.redirect('/' + version + "/search/SR5a-range-postcode")
        } else if (dateRange == "range" && location == "weatherStation") {
            res.redirect('/' + version + "/search/SR4a-range-weather-station")
        } else if (dateRange == "whole" && location == "everywhere") {
            res.redirect('/' + version + "/search/SR3b-all-season-all-locations")
        } else if (dateRange == "whole" && location == "postcode") {
            res.redirect('/' + version + "/search/SR5b-all-season-postcode")
        } else if (dateRange == "whole" && location == "weatherStation") {
            res.redirect('/' + version + "/search/SR4b-all-season-weather-station")
        } else {
            res.redirect('/' + version + "/search/gone-wrong")
        }
    });





    //------------------
    // Views: SEARCH RESULT VARIATIONS

    router.get('/' + version + "/search/SR1-citizen-postcode", function (req, res) {
        // Set active navigation tab
        aboutActive = false;
        dailyActive = false;
        weeklyActive = false;
        searchActive = false;
        res.render(version + "/search/SR1-citizen-postcode", {
            'version': version,
            // Navigation settings
            'aboutActive': aboutActive,
            'dailyActive': dailyActive,
            'weeklyActive': weeklyActive,
            'searchActive': searchActive,
            'about': "/" + version + "/A1-about",
            'daily': "/" + version + "/daily-views/D2b-daily-forecasted-and-recorded",
            'weekly': "/" + version + "/weekly-views/w2-week-with-triggers",
            'search': "/" + version + "/search/S-search-journey-select",
        });
    });

    router.get('/' + version + "/search/SR2-single-day-all-locations", function (req, res) {
        aboutActive = false;
        dailyActive = false;
        weeklyActive = false;
        searchActive = false;
        res.render(version + "/search/SR2-single-day-all-locations", {
            'version': version,
            // Navigation settings
            'aboutActive': aboutActive,
            'dailyActive': dailyActive,
            'weeklyActive': weeklyActive,
            'searchActive': searchActive,
            'about': "/" + version + "/A1-about",
            'daily': "/" + version + "/daily-views/D2b-daily-forecasted-and-recorded",
            'weekly': "/" + version + "/weekly-views/w2-week-with-triggers",
            'search': "/" + version + "/search/S-search-journey-select",
            'aqd': "/" + version + "/search/A1-aqd-summary",
            'listStations': "/" + version + "/location-lists/for-aqd/LW2a-weather-daily-two-triggers-with-aqd",
            'listPostcodes': "/" + version + "/location-lists/LP2-postcodes-daily-two-triggers",
        });
    });

    router.get('/' + version + "/search/SR3a-range-all-locations", function (req, res) {
        aboutActive = false;
        dailyActive = false;
        weeklyActive = false;
        searchActive = false;
        res.render(version + "/search/SR3a-range-all-locations", {
            'version': version,
            // Navigation settings
            'aboutActive': aboutActive,
            'dailyActive': dailyActive,
            'weeklyActive': weeklyActive,
            'searchActive': searchActive,
            'about': "/" + version + "/A1-about",
            'daily': "/" + version + "/daily-views/D2b-daily-forecasted-and-recorded",
            'weekly': "/" + version + "/weekly-views/w2-week-with-triggers",
            'search': "/" + version + "/search/S-search-journey-select",
        });
    });

    router.get('/' + version + "/search/SR3b-all-season-all-locations", function (req, res) {
        aboutActive = false;
        dailyActive = false;
        weeklyActive = false;
        searchActive = false;
        res.render(version + "/search/SR3b-all-season-all-locations", {
            'version': version,
            // Navigation settings
            'aboutActive': aboutActive,
            'dailyActive': dailyActive,
            'weeklyActive': weeklyActive,
            'searchActive': searchActive,
            'about': "/" + version + "/A1-about",
            'daily': "/" + version + "/daily-views/D2b-daily-forecasted-and-recorded",
            'weekly': "/" + version + "/weekly-views/w2-week-with-triggers",
            'search': "/" + version + "/search/S-search-journey-select",
        });
    });

    router.get('/' + version + "/search/SR4a-range-weather-station", function (req, res) {
        aboutActive = false;
        dailyActive = false;
        weeklyActive = false;
        searchActive = false;
        res.render(version + "/search/SR4a-range-weather-station", {
            'version': version,
            // Navigation settings
            'aboutActive': aboutActive,
            'dailyActive': dailyActive,
            'weeklyActive': weeklyActive,
            'searchActive': searchActive,
            'about': "/" + version + "/A1-about",
            'daily': "/" + version + "/daily-views/D2b-daily-forecasted-and-recorded",
            'weekly': "/" + version + "/weekly-views/w2-week-with-triggers",
            'search': "/" + version + "/search/S-search-journey-select",
            'listPostcodes': "/" + version + "/location-lists/for-results/LP4-postcodes-weather-station-result",
        });
    });

    router.get('/' + version + "/search/SR4b-all-season-weather-station", function (req, res) {
        aboutActive = false;
        dailyActive = false;
        weeklyActive = false;
        searchActive = false;
        res.render(version + "/search/SR4b-all-season-weather-station", {
            'version': version,
            // Navigation settings
            'aboutActive': aboutActive,
            'dailyActive': dailyActive,
            'weeklyActive': weeklyActive,
            'searchActive': searchActive,
            'about': "/" + version + "/A1-about",
            'daily': "/" + version + "/daily-views/D2b-daily-forecasted-and-recorded",
            'weekly': "/" + version + "/weekly-views/w2-week-with-triggers",
            'search': "/" + version + "/search/S-search-journey-select",
            'listPostcodes': "/" + version + "/location-lists/for-results/LP4-postcodes-weather-station-result",
        });
    });

    router.get('/' + version + "/search/SR5a-range-postcode", function (req, res) {
        aboutActive = false;
        dailyActive = false;
        weeklyActive = false;
        searchActive = false;
        res.render(version + "/search/SR5a-range-postcode", {
            'version': version,
            // Navigation settings
            'aboutActive': aboutActive,
            'dailyActive': dailyActive,
            'weeklyActive': weeklyActive,
            'searchActive': searchActive,
            'about': "/" + version + "/A1-about",
            'daily': "/" + version + "/daily-views/D2b-daily-forecasted-and-recorded",
            'weekly': "/" + version + "/weekly-views/w2-week-with-triggers",
            'search': "/" + version + "/search/S-search-journey-select",
            'aqd': "/" + version + "/search/A1-aqd-summary-UR2",
        });
    });

    router.get('/' + version + "/search/SR5b-all-season-postcode", function (req, res) {
        aboutActive = false;
        dailyActive = false;
        weeklyActive = false;
        searchActive = false;
        res.render(version + "/search/SR5b-all-season-postcode", {
            'version': version,
            // Navigation settings
            'aboutActive': aboutActive,
            'dailyActive': dailyActive,
            'weeklyActive': weeklyActive,
            'searchActive': searchActive,
            'about': "/" + version + "/A1-about",
            'daily': "/" + version + "/daily-views/D2b-daily-forecasted-and-recorded",
            'weekly': "/" + version + "/weekly-views/w2-week-with-triggers",
            'search': "/" + version + "/search/S-search-journey-select",
            'aqd': "/" + version + "/search/A1-aqd-summary-UR2",
        });
    });

    router.get('/' + version + "/search/SR6-no-results", function (req, res) {
        aboutActive = false;
        dailyActive = false;
        weeklyActive = false;
        searchActive = false;
        res.render(version + "/search/SR6-no-results", {
            'version': version,
            // Navigation settings
            'aboutActive': aboutActive,
            'dailyActive': dailyActive,
            'weeklyActive': weeklyActive,
            'searchActive': searchActive,
            'about': "/" + version + "/A1-about",
            'daily': "/" + version + "/daily-views/D2b-daily-forecasted-and-recorded",
            'weekly': "/" + version + "/weekly-views/w2-week-with-triggers",
            'search': "/" + version + "/search/S-search-journey-select",
        });
    });







    //------------------
    // Views: ADDITIONAL QUALIFYING DAYS 

    router.get('/' + version + "/search/A1-aqd-summary", function (req, res) {
        res.render(version + "/search/A1-aqd-summary", {
            'version': version,
            'about': "/" + version + "/A1-about",
            'daily': "/" + version + "/daily-views/D2b-daily-forecasted-and-recorded",
            'weekly': "/" + version + "/weekly-views/w2-week-with-triggers",
            'search': "/" + version + "/search/S-search-journey-select",
        });
    });

    router.get('/' + version + "/search/A1-aqd-summary-UR", function (req, res) {
        res.render(version + "/search/A1-aqd-summary-UR", {
            'version': version,
            'about': "/" + version + "/A1-about",
            'daily': "/" + version + "/daily-views/D2b-daily-forecasted-and-recorded",
            'weekly': "/" + version + "/weekly-views/w2-week-with-triggers",
            'search': "/" + version + "/search/S-search-journey-select",
        });
    });


    //------------------
    // Views: ABOUT THIS SERVICE

    router.get('/' + version + "/A1-about", function (req, res) {
        let amount = req.session.data['amount'];
        let standard;
        if (amount == "" || amount == undefined) {
            standard = true
        }

        let startDateDay = req.session.data['start-date-day'];
        let startDateMonth = req.session.data['start-date-month'];
        let endDateDay = req.session.data['end-date-day'];
        let endDateMonth = req.session.data['end-date-month'];
        let startDateText;
        let endDateText;

        switch (startDateMonth) {
            case "1":
                startDateText = startDateDay + " January";
                break;
            case "2":
                startDateText = startDateDay + " February";
                break;
            case "3":
                startDateText = startDateDay + " March";
                break;
            case "4":
                startDateText = startDateDay + " April";
                break;
            case "5":
                startDateText = startDateDay + " May";
                break;
            case "6":
                startDateText = startDateDay + " June";
                break;
            case "7":
                startDateText = startDateDay + " July";
                break;
            case "8":
                startDateText = startDateDay + " August";
                break;
            case "9":
                startDateText = startDateDay + " September";
                break;
            case "10":
                startDateText = startDateDay + " October";
                break;
            case "11":
                startDateText = startDateDay + " November";
                break;
            case "12":
                startDateText = startDateDay + " December";
                break;
            default:
                startDateText = "1 November";
        }

        switch (endDateMonth) {
            case "1":
                endDateText = endDateDay + " January";
                break;
            case "2":
                endDateText = endDateDay + " February";
                break;
            case "3":
                endDateText = endDateDay + " March";
                break;
            case "4":
                endDateText = endDateDay + " April";
                break;
            case "5":
                endDateText = endDateDay + " May";
                break;
            case "6":
                endDateText = endDateDay + " June";
                break;
            case "7":
                endDateText = endDateDay + " July";
                break;
            case "8":
                endDateText = endDateDay + " August";
                break;
            case "9":
                endDateText = endDateDay + " September";
                break;
            case "10":
                endDateText = endDateDay + " October";
                break;
            case "11":
                endDateText = endDateDay + " November";
                break;
            case "12":
                endDateText = endDateDay + " December";
                break;
            default:
                endDateText = "31 March";
        }

        // Set active navigation tab
        aboutActive = true;
        dailyActive = false;
        weeklyActive = false;
        searchActive = false;
        res.render(version + "/A1-about", {
            'version': version,
            // Navigation settings
            'aboutActive': aboutActive,
            'dailyActive': dailyActive,
            'weeklyActive': weeklyActive,
            'searchActive': searchActive,
            'about': "/" + version + "/A1-about",
            'daily': "/" + version + "/daily-views/D2a-daily-forecasted",
            'weekly': "/" + version + "/weekly-views/w2-week-with-triggers",
            'search': "/" + version + "/search/S-search-journey-select",
            // Page links
            'viewLocations': "/" + version + "/",
            'changeNotifications': "/" + version + "/notifications/N1-manage-subscriptions",
            'changeLocations': "/" + version + "/",
            'payment': "/" + version + "/manage/M2a-manage-amount-change",
            'seasonLength': "/" + version + "/manage/M3a-manage-length-change-start",
            // Conditional values
            'standard': standard,
            'amount': amount,
            'length': `${startDateText} to ${endDateText}`
        });
    });

    router.get('/' + version + "/manage/M2a-manage-amount-change", function (req, res) {
        let amount = req.session.data['amount'];
        res.render(version + "/manage/M2a-manage-amount-change", {
            'error': req.query.error,
            'version': version,
            // Navigation settings
            'about': "/" + version + "/A1-about",
            'daily': "/" + version + "/daily-views/D2a-daily-forecasted",
            'weekly': "/" + version + "/weekly-views/w2-week-with-triggers",
            'search': "/" + version + "/search/S-search-journey-select",
            // Conditional values
            'amount': amount
        });
    });

    router.post('/' + version + "/manage/M2a-manage-amount-change", function (req, res) {
        let amount = req.session.data['amount'];
        if (amount == "" || amount == undefined) {
            res.redirect('/' + version + "/manage/M2a-manage-amount-change?error=true")
        } else {
            res.redirect('/' + version + "/manage/M2b-manage-amount-confirm")
        }
    });

    router.get('/' + version + "/manage/M2b-manage-amount-confirm", function (req, res) {
        let amount = req.session.data['amount'];
        res.render(version + "/manage/M2b-manage-amount-confirm", {
            'error': req.query.error,
            'version': version,
            'about': "/" + version + "/A1-about",
            'daily': "/" + version + "/daily-views/D2a-daily-forecasted",
            'weekly': "/" + version + "/weekly-views/w2-week-with-triggers",
            'search': "/" + version + "/search/S-search-journey-select",
            'amount': amount
        });
    });

    router.post('/' + version + "/manage/M2b-manage-amount-confirm", function (req, res) {
        let confirmAmount = req.session.data['confirm-amount'];
        console.log("Confirm amount = " + confirmAmount)
        if (confirmAmount == 'yes') {
            res.redirect('/' + version + "/A1-about")
        } else if (confirmAmount == 'no') {
            res.redirect('/' + version + "/manage/M2a-manage-amount-change")
        } else {
            res.redirect('/' + version + "/manage/M2b-manage-amount-confirm?error=true")
        }

    });


    //------------------
    // Views: CHANGE SEASON LENGTH


    router.get('/' + version + "/manage/M3a-manage-length-change-start", function (req, res) {
        res.render(version + "/manage/M3a-manage-length-change-start", {
            'error': req.query.error,
            'version': version,
            'about': "/" + version + "/A1-about",
            'daily': "/" + version + "/daily-views/D2a-daily-forecasted",
            'weekly': "/" + version + "/weekly-views/w2-week-with-triggers",
            'search': "/" + version + "/search/S-search-journey-select",
        });
    });

    router.post('/' + version + "/manage/M3a-manage-length-change-start", function (req, res) {
        let startDateDay = req.session.data['start-date-day'];
        let startDateMonth = req.session.data['start-date-month'];
        if (startDateDay == "" || startDateDay == undefined) {
            res.redirect('/' + version + "/manage/M3a-manage-length-change-start?error=true")
        } else if (startDateMonth == "" || startDateMonth == undefined) {
            res.redirect('/' + version + "/manage/M3a-manage-length-change-start?error=true")
        } else (
            res.redirect('/' + version + "/manage/M3b-manage-length-change-end")
        )
    });

    router.get('/' + version + "/manage/M3b-manage-length-change-end", function (req, res) {
        res.render(version + "/manage/M3b-manage-length-change-end", {
            'error': req.query.error,
            'version': version,
            'about': "/" + version + "/A1-about",
            'daily': "/" + version + "/daily-views/D2a-daily-forecasted",
            'weekly': "/" + version + "/weekly-views/w2-week-with-triggers",
            'search': "/" + version + "/search/S-search-journey-select",
        });
    });

    router.post('/' + version + "/manage/M3b-manage-length-change-end", function (req, res) {
        let endDateDay = req.session.data['end-date-day'];
        let endDateMonth = req.session.data['end-date-month'];
        if (endDateDay == "" || endDateDay == undefined) {
            res.redirect('/' + version + "/manage/M3b-manage-length-change-end?error=true")
        } else if (endDateMonth == "" || endDateMonth == undefined) {
            res.redirect('/' + version + "/manage/M3b-manage-length-change-end?error=true")
        } else (
            res.redirect('/' + version + "/manage/M3c-manage-length-confirm")
        )

    });

    router.get('/' + version + "/manage/M3c-manage-length-confirm", function (req, res) {
        let startDateDay = req.session.data['start-date-day'];
        let startDateMonth = req.session.data['start-date-month'];
        let endDateDay = req.session.data['end-date-day'];
        let endDateMonth = req.session.data['end-date-month'];
        let startDateText;
        let endDateText;

        switch (startDateMonth) {
            case "1":
                startDateText = startDateDay + " January";
                break;
            case "2":
                startDateText = startDateDay + " February";
                break;
            case "3":
                startDateText = startDateDay + " March";
                break;
            case "4":
                startDateText = startDateDay + " April";
                break;
            case "5":
                startDateText = startDateDay + " May";
                break;
            case "6":
                startDateText = startDateDay + " June";
                break;
            case "7":
                startDateText = startDateDay + " July";
                break;
            case "8":
                startDateText = startDateDay + " August";
                break;
            case "9":
                startDateText = startDateDay + " September";
                break;
            case "10":
                startDateText = startDateDay + " October";
                break;
            case "11":
                startDateText = startDateDay + " November";
                break;
            case "12":
                startDateText = startDateDay + " December";
                break;
            default:
                startDateText = "1 October";
        }

        switch (endDateMonth) {
            case "1":
                endDateText = endDateDay + " January";
                break;
            case "2":
                endDateText = endDateDay + " February";
                break;
            case "3":
                endDateText = endDateDay + " March";
                break;
            case "4":
                endDateText = endDateDay + " April";
                break;
            case "5":
                endDateText = endDateDay + " May";
                break;
            case "6":
                endDateText = endDateDay + " June";
                break;
            case "7":
                endDateText = endDateDay + " July";
                break;
            case "8":
                endDateText = endDateDay + " August";
                break;
            case "9":
                endDateText = endDateDay + " September";
                break;
            case "10":
                endDateText = endDateDay + " October";
                break;
            case "11":
                endDateText = endDateDay + " November";
                break;
            case "12":
                endDateText = endDateDay + " December";
                break;
            default:
                endDateText = "30 April";
        }



        res.render(version + "/manage/M3c-manage-length-confirm", {
            'error': req.query.error,
            'version': version,
            'about': "/" + version + "/A1-about",
            'daily': "/" + version + "/daily-views/D2a-daily-forecasted",
            'weekly': "/" + version + "/weekly-views/w2-week-with-triggers",
            'search': "/" + version + "/search/S-search-journey-select",
            'start': startDateText,
            'end': endDateText,
            'changeStart': "/" + version + "/manage/M3a-manage-length-change-start",
            'changeEnd': "/" + version + "/manage/M3b-manage-length-change-end"
        });
    });

    router.post('/' + version + "/manage/M3c-manage-length-confirm", function (req, res) {
        res.redirect('/' + version + "/A1-about")
    });









    //------------------
    // Views: MANAGE SUBSCRIPTIONS

    let subCount = 0;
    let success = false;

    router.get('/' + version + "/notifications/N1-manage-subscriptions", function (req, res) {
        // Trigger updates
        console.log(subCount);
        let triggerSub = req.session.data['triggerSub'];
        let triggerStatus;
        let triggerStatusViewSettings;
        console.log("Trigger Status " + triggerStatus)
        if (triggerSub === "yes") {
            triggerStatus = "Subscribed"
            triggerStatusAction = "Unsubscribe"
            triggerStatusRoute = '/' + version + "/notifications/N2b-trigger-unsubscribe"
            triggerStatusViewSettings = true
            var triggerFile = req.session.data['triggerFile']
            if (triggerFile !== "Yes") {
                triggerFile = "No"
            }
            var noTrigger = req.session.data['noTrigger']
            if (noTrigger !== "Yes") {
                noTrigger = "No"
            }
        } else {
            triggerStatus = "Unsubscribed"
            triggerStatusAction = "Subscribe"
            triggerStatusRoute = '/' + version + "/notifications/N2a-trigger-subscribe"
            triggerStatusViewSettings = false
        }

        // Weekly summary 
        let weeklySub = req.session.data['weeklySub'];
        let weeklyStatus;
        let weeklyStatusViewSettings;
        console.log("Weekly Status " + weeklyStatus)
        if (weeklySub === "yes") {
            weeklyStatus = "Subscribed"
            weeklyStatusAction = "Unsubscribe"
            weeklyStatusRoute = '/' + version + "/notifications/N3b-weekly-unsubscribe"
            weeklyStatusViewSettings = true
            var weeklyFile = req.session.data['weeklyFile']
            if (weeklyFile !== "Yes") {
                weeklyFile = "No"
            }
        } else {
            weeklyStatus = "Unsubscribed"
            weeklyStatusAction = "Subscribe"
            weeklyStatusRoute = '/' + version + "/notifications/N3a-weekly-subscribe"
            weeklyStatusViewSettings = false
        }

        // AQD summary 
        let aqdSub = req.session.data['aqdSub'];
        let aqdStatus;
        if (aqdSub === "yes") {
            aqdStatus = "Subscribed"
            aqdStatusAction = "Unsubscribe"
            aqdStatusRoute = '/' + version + "/notifications/N4b-aqd-unsubscribe"
        } else {
            aqdStatus = "Unsubscribed"
            aqdStatusAction = "Subscribe"
            aqdStatusRoute = '/' + version + "/notifications/N4a-aqd-subscribe"
        }

        if (subCount > 0) {
            success = true;
        }


        res.render(version + "/notifications/N1-manage-subscriptions", {
            'error': req.query.error,
            'version': version,
            'about': "/" + version + "/A1-about",
            'daily': "/" + version + "/daily-views/D2a-daily-forecasted",
            'weekly': "/" + version + "/weekly-views/w2-week-with-triggers",
            'search': "/" + version + "/search/S-search-journey-select",
            'back': "/" + version + "/A1-about",
            //Trigger updates
            'triggerStatus': triggerStatus,
            'triggerStatusAction': triggerStatusAction,
            'changeTrigger': triggerStatusRoute,
            'triggerStatusView': triggerStatusViewSettings,
            'triggerFile': triggerFile,
            'noTrigger': noTrigger,
            'directChangeTriggerFile': '/' + version + "/notifications/N2c-trigger-file-YN",
            //Weekly summary
            'weeklyStatus': weeklyStatus,
            'weeklyStatusAction': weeklyStatusAction,
            'changeWeekly': weeklyStatusRoute,
            'weeklyStatusView': weeklyStatusViewSettings,
            'weeklyFile': weeklyFile,
            'directChangeWeeklyFile': '/' + version + "/notifications/N3c-weekly-file-YN",
            'directChangeNoTrigger': '/' + version + "/notifications/N2d-trigger-no-YN",
            //AQD
            'aqdStatus': aqdStatus,
            'aqdStatusAction': aqdStatusAction,
            'changeaqd': aqdStatusRoute,


            // Success banner
            'success': success
        });
    });







    // Daily trigger subscribe journey
    router.get('/' + version + "/notifications/N2a-trigger-subscribe", function (req, res) {
        res.render(version + "/notifications/N2a-trigger-subscribe", {
            'error': req.query.error,
            'version': version,
            'about': "/" + version + "/A1-about",
            'daily': "/" + version + "/daily-views/D2a-daily-forecasted",
            'weekly': "/" + version + "/weekly-views/w2-week-with-triggers",
            'search': "/" + version + "/search/S-search-journey-select",
        });
    });

    router.post('/' + version + "/notifications/N2a-trigger-subscribe", function (req, res) {
        var triggerSub = req.session.data['triggerSub']
        if (triggerSub === "yes") {
            res.redirect('/' + version + "/notifications/N2c-trigger-file-YN")
        } else if (triggerSub === "no") {
            res.redirect('/' + version + "/notifications/N1-manage-subscriptions")
        } else {
            res.redirect('/' + version + "/notifications/N2a-trigger-subscribe?error=true")
        }
    });


    router.get('/' + version + "/notifications/N2c-trigger-file-YN", function (req, res) {
        subCount++;
        res.render(version + "/notifications/N2c-trigger-file-YN", {
            'error': req.query.error,
            'version': version,
            'about': "/" + version + "/A1-about",
            'daily': "/" + version + "/daily-views/D2a-daily-forecasted",
            'weekly': "/" + version + "/weekly-views/w2-week-with-triggers",
            'search': "/" + version + "/search/S-search-journey-select",
        });
    });

    router.post('/' + version + "/notifications/N2c-trigger-file-YN", function (req, res) {
        var triggerFile = req.session.data['triggerFile']
        if (triggerFile === "Yes" || triggerFile === "No") {
            res.redirect('/' + version + "/notifications/N2d-trigger-no-YN")
        } else {
            res.redirect('/' + version + "/notifications/N2c-trigger-file-YN?error=true")
        }
    });

    router.get('/' + version + "/notifications/N2d-trigger-no-YN", function (req, res) {
        subCount++;
        res.render(version + "/notifications/N2d-trigger-no-YN", {
            'error': req.query.error,
            'version': version,
            'about': "/" + version + "/A1-about",
            'daily': "/" + version + "/daily-views/D2a-daily-forecasted",
            'weekly': "/" + version + "/weekly-views/w2-week-with-triggers",
            'search': "/" + version + "/search/S-search-journey-select",
        });
    });

    router.post('/' + version + "/notifications/N2d-trigger-no-YN", function (req, res) {
        var triggerNo = req.session.data['noTrigger']
        if (triggerNo === "Yes" || triggerNo === "No") {
            res.redirect('/' + version + "/notifications/N1-manage-subscriptions")
        } else {
            res.redirect('/' + version + "/notifications/N2d-trigger-no-YN?error=true")
        }
    });

    // Daily trigger UNsubscribe journey

    router.get('/' + version + "/notifications/N2b-trigger-unsubscribe", function (req, res) {
        res.render(version + "/notifications/N2b-trigger-unsubscribe", {
            'error': req.query.error,
            'version': version,
            'about': "/" + version + "/A1-about",
            'daily': "/" + version + "/daily-views/D2a-daily-forecasted",
            'weekly': "/" + version + "/weekly-views/w2-week-with-triggers",
            'search': "/" + version + "/search/S-search-journey-select",
        });
    });

    router.post('/' + version + "/notifications/N2b-trigger-unsubscribe", function (req, res) {
        var triggerSub = req.session.data['triggerSub']
        if (triggerSub === "yes" || triggerSub === "no") {
            res.redirect('/' + version + "/notifications/N1-manage-subscriptions")
        } else {
            res.redirect('/' + version + "/notifications/N2b-trigger-unsubscribe?error=true")
        }
    });


    // Weekly trigger subscribe journey
    router.get('/' + version + "/notifications/N3a-weekly-subscribe", function (req, res) {
        res.render(version + "/notifications/N3a-weekly-subscribe", {
            'error': req.query.error,
            'version': version,
            'about': "/" + version + "/A1-about",
            'daily': "/" + version + "/daily-views/D2a-daily-forecasted",
            'weekly': "/" + version + "/weekly-views/w2-week-with-triggers",
            'search': "/" + version + "/search/S-search-journey-select",
        });
    });

    router.post('/' + version + "/notifications/N3a-weekly-subscribe", function (req, res) {
        var weeklySub = req.session.data['weeklySub'];
        if (weeklySub === "yes") {
            subCount++;
            console.log(subCount);
            res.redirect('/' + version + "/notifications/N3c-weekly-file-YN")
        } else if (weeklySub === "no") {
            res.redirect('/' + version + "/notifications/N1-manage-subscriptions")
        } else {
            res.redirect('/' + version + "/notifications/N3a-weekly-subscribe?error=true")
        }
    });

    router.get('/' + version + "/notifications/N3c-weekly-file-YN", function (req, res) {
        res.render(version + "/notifications/N3c-weekly-file-YN", {
            'error': req.query.error,
            'version': version,
            'about': "/" + version + "/A1-about",
            'daily': "/" + version + "/daily-views/D2a-daily-forecasted",
            'weekly': "/" + version + "/weekly-views/w2-week-with-triggers",
            'search': "/" + version + "/search/S-search-journey-select",
        });
    });

    router.post('/' + version + "/notifications/N3c-weekly-file-YN", function (req, res) {
        var weeklyFile = req.session.data['weeklyFile']
        if (weeklyFile === "Yes" || weeklyFile === "No") {
            res.redirect('/' + version + "/notifications/N1-manage-subscriptions")
        } else {
            res.redirect('/' + version + "/notifications/N3c-weekly-file-YN?error=true")
        }
    });

    // Weekly summary UNsubscribe journey

    router.get('/' + version + "/notifications/N3b-weekly-unsubscribe", function (req, res) {
        res.render(version + "/notifications/N3b-weekly-unsubscribe", {
            'error': req.query.error,
            'version': version,
            'about': "/" + version + "/A1-about",
            'daily': "/" + version + "/daily-views/D2a-daily-forecasted",
            'weekly': "/" + version + "/weekly-views/w2-week-with-triggers",
            'search': "/" + version + "/search/S-search-journey-select",
        });
    });

    router.post('/' + version + "/notifications/N3b-weekly-unsubscribe", function (req, res) {
        var weeklySub = req.session.data['weeklySub']
        if (weeklySub === "yes" || weeklySub === "no") {
            res.redirect('/' + version + "/notifications/N1-manage-subscriptions")
        } else {
            res.redirect('/' + version + "/notifications/N3b-weekly-unsubscribe?error=true")
        }
    });


    // AQD subscribe journey
    router.get('/' + version + "/notifications/N4a-aqd-subscribe", function (req, res) {
        res.render(version + "/notifications/N4a-aqd-subscribe", {
            'error': req.query.error,
            'version': version,
            'about': "/" + version + "/A1-about",
            'daily': "/" + version + "/daily-views/D2a-daily-forecasted",
            'weekly': "/" + version + "/weekly-views/w2-week-with-triggers",
            'search': "/" + version + "/search/S-search-journey-select",
        });
    });

    router.post('/' + version + "/notifications/N4a-aqd-subscribe", function (req, res) {
        var aqdSub = req.session.data['aqdSub'];
        if (aqdSub === "yes") {
            subCount++;
            console.log(subCount);
            res.redirect('/' + version + "/notifications/N1-manage-subscriptions")
        } else if (aqdSub === "no") {
            res.redirect('/' + version + "/notifications/N1-manage-subscriptions")
        } else {
            res.redirect('/' + version + "/notifications/N4a-aqd-subscribe?error=true")
        }
    });

    // AQD UNsubscribe journey

    router.get('/' + version + "/notifications/N4b-aqd-unsubscribe", function (req, res) {
        res.render(version + "/notifications/N4b-aqd-unsubscribe", {
            'error': req.query.error,
            'version': version,
            'about': "/" + version + "/A1-about",
            'daily': "/" + version + "/daily-views/D2a-daily-forecasted",
            'weekly': "/" + version + "/weekly-views/w2-week-with-triggers",
            'search': "/" + version + "/search/S-search-journey-select",
        });
    });

    router.post('/' + version + "/notifications/N4b-aqd-unsubscribe", function (req, res) {
        var aqdSub = req.session.data['aqdSub']
        if (aqdSub === "yes" || aqdSub === "no") {
            res.redirect('/' + version + "/notifications/N1-manage-subscriptions")
        } else {
            res.redirect('/' + version + "/notifications/N3b-weekly-unsubscribe?error=true")
        }
    });






























};

