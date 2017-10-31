// Google Places API JSON

//=======================================
// Global
//=======================================

    // URL
    var rlUrl = window.location.hostname;
    // FOOTER
    var phoneNumber;

    var jsonString;

        if ( rlUrl.indexOf('purehairsherborne.co.uk') >= 0){
            var jsonString = "/wp-content/themes/williamsgroup/assets/js/lib/ph_json.json";

        }
        else if ( rlUrl.indexOf('beautybaryeovil.co.uk') >= 0){
            var jsonString = "/wp-content/themes/williamsgroup/assets/js/lib/bar_json.json";
        }

        $.ajax({url: jsonString, success: function(json){

            console.log(json);

            // FOOTER
            var addressAll = json.result.formatted_address;
            var phoneNumber = json.result.formatted_phone_number;
            var footerContact =     '<p>' + addressAll + '</p>' + '<p>' + phoneNumber + '</p>';
            // APPLY YO HTML
            document.getElementById("footer_contact").innerHTML = footerContact;

            // address
            var addressStreet = json.result.address_components[0].long_name;
            var addressTown = json.result.address_components[1].long_name;
            var addressCounty = json.result.address_components[3].long_name;
            var addressPostcode = json.result.address_components[6].long_name;
            // opening hours
            var openingHoursMon = json.result.opening_hours.weekday_text[0];
            var openingHoursTue = json.result.opening_hours.weekday_text[1];
            var openingHoursWed = json.result.opening_hours.weekday_text[2];
            var openingHoursThu = json.result.opening_hours.weekday_text[3];
            var openingHoursFri = json.result.opening_hours.weekday_text[4];
            var openingHoursSat = json.result.opening_hours.weekday_text[5];
            var openingHoursSun = json.result.opening_hours.weekday_text[6];
            // formatted
            var contactAddress =    '<div class="mbl pbl rule-bottom"><h4><b>Find Us</b><div></div></h4>'
                                    + '<p>Pure Hair</p>'
                                    + '<p>' + addressStreet + '</p>'
                                    + '<p>' + addressTown + '</p>'
                                    + '<p>' + addressCounty + '</p>'
                                    + '<p>' + addressPostcode + '</p></div>';
            var contactTel =        '<div class="mbl pbl rule-bottom"><h4><b>Call Us</b><div></div></h4>'
                                    + '<p>' + phoneNumber + '</p></div>';
            var openingHours =    '<div class="mbm"><h4><b>Opening Times</b><div></div></h4>'
                                    + '<p>' + openingHoursMon + '</p>'
                                    + '<p>' + openingHoursTue + '</p>'
                                    + '<p>' + openingHoursWed + '</p>'
                                    + '<p>' + openingHoursThu + '</p>'
                                    + '<p>' + openingHoursFri + '</p>'
                                    + '<p>' + openingHoursSat + '</p>'
                                    + '<p>' + openingHoursSun + '</p></div>';
            // APPLY YO HTML
            document.getElementById("contact_details").innerHTML = contactAddress + contactTel + openingHours;

        }});
;

//=======================================
// PURE HAIR SALON
//=======================================

// GET BUSINESS JSON
$.ajax({url: "/wp-content/themes/williamsgroup/assets/js/lib/ph_json.json", success: function(json){
// Create Variables
    // name
    var phName = json.result.name;
    // address
    var phAddressAll = json.result.formatted_address;
    // telephone
    var phPhoneNumber = json.result.formatted_phone_number;
    // formatted
    var phSalonDetails =  '<h4>' + phName + '</h4>' + '<p>' + phAddressAll + '</p>'
    + '<p><b>' + phPhoneNumber + '</b></p>';
    // APPLY YO HTML
    document.getElementById("ph_info").innerHTML = phSalonDetails;
}});



//=======================================
// UNISEX SALON
//=======================================

// GET BUSINESS JSON
$.ajax({url: "/wp-content/themes/williamsgroup/assets/js/lib/uni_json.json", success: function(json){
// Create Variables
    // name
    var uniName = json.result.name;
    // address
    var uniAddressAll = json.result.formatted_address;
    // telephone
    var uniPhoneNumber = json.result.formatted_phone_number;
    // formatted
    var uniSalonDetails =  '<h4>' + uniName + '</h4>' + '<p>' + uniAddressAll + '</p>'
    + '<p><b>' + uniPhoneNumber + '</b></p>';
    // APPLY YO HTML
    document.getElementById("uni_info").innerHTML = uniSalonDetails;
}});


//=======================================
// A TOUCH OF BEAUTY SALON
//=======================================

// GET BUSINESS JSON
$.ajax({url: "/wp-content/themes/williamsgroup/assets/js/lib/atob_json.json", success: function(json){
// Create Variables
    // name
    var atobName = json.result.name;
    // address
    var atobAddressAll = json.result.formatted_address;
    // telephone
    var atobPhoneNumber = json.result.formatted_phone_number;
    // formatted
    var atobSalonDetails =  '<h4>' + atobName + '</h4>' + '<p>' + atobAddressAll + '</p>'
    + '<p><b>' + atobPhoneNumber + '</b></p>';
    // APPLY YO HTML
    document.getElementById("atob_info").innerHTML = atobSalonDetails;
}});



//
//=======================================
// HAIR & CARE 4U SALON
//=======================================

// GET BUSINESS JSON
$.ajax({url: "/wp-content/themes/williamsgroup/assets/js/lib/hc4u_json.json", success: function(json){
// Create Variables
    // name
    var hcName = json.result.name;
    // address
    var hcAddressAll = json.result.formatted_address;
    // telephone
    var hcPhoneNumber = json.result.formatted_phone_number;
    // formatted
    var hcSalonDetails =  '<h4>' + hcName + '</h4>' + '<p>' + hcAddressAll + '</p>'
    + '<p><b>' + hcPhoneNumber + '</b></p>';
    // APPLY YO HTML
    document.getElementById("hc_info").innerHTML = hcSalonDetails;
}});




// GET BUSINESS JSON
$.ajax({url: "/wp-content/themes/williamsgroup/assets/js/lib/bar_json.json", success: function(json){
// Create Variables
    // name
    var barName = json.result.name;
    // address
    var barAddressAll = json.result.formatted_address;
    // telephone
    var barPhoneNumber = json.result.formatted_phone_number;
    // formatted
    var barSalonDetails =  '<h4>' + barName + '</h4>' + '<p>' + barAddressAll + '</p>'
    + '<p><b>' + barPhoneNumber + '</b></p>';
    // APPLY YO HTML
    document.getElementById("bar_info").innerHTML = barSalonDetails;
}});

// // ============================================= BEAUTY BAR END ===================================================




// Pure Hair
// ChIJz0GnVRxHckgRSGuONsqNpVA

// UNISEX
// ChIJZejjRS1AckgRUU3btSPcxSc

// A Touch Of Beauty
// ChIJZejjRS1AckgR2ITcCyIT25Y

// Hair & Care 4U
// ChIJM84z3ixAckgRg282Mwt8vBc

// Beauty bar
// ChIJOedu3SxAckgR2zTBHZ0Nthc

// https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJOedu3SxAckgR2zTBHZ0Nthc&key=AIzaSyAoT7q2w_suKDepnYDY6Ich9YiRABO2pzA
