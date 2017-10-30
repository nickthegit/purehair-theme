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

            // REVIEWS
            // var reviewText1 = json.result.reviews[0].text;
            // var reviewText2 = json.result.reviews[1].text;
            // var reviewOne = '<h3>"' + reviewText1 + '"</h3>';
            // var reviewTwo = '<h3>"' + reviewText2 + '"</h3>';
            // // APPLY YO HTML
            // document.getElementById("review_text_1").innerHTML = reviewOne;
            // document.getElementById("review_text_2").innerHTML = reviewTwo;

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


        // else if ( rlUrl.indexOf('rosieleecreative.com') >= 0){
        //     footerTelephone = '+1 646 603 6906';
        //     footerEmail = 'tealeaf@rosieleecreative.com';
        // }
        // else {
        //     footerTelephone = '+44 (0)20 7613 3752';
        //     footerEmail = 'tealeaf@rosielee.co.uk';
        //     console.log('FOOTER FAILED!!');
        // }




// // GET BUSINESS JSON
// $.ajax({url: "/wp-content/themes/williamsgroup/assets/js/lib/bar_json.json", success: function(json){
//
// // Create Variables
//     // address
//     var barAddressAll = json.result.formatted_address;
//     // telephone
//     var barPhoneNumber = json.result.formatted_phone_number;
//     //formatted
//     var barFooterContact =     '<p>' + barAddressAll + '</p>'
//                             + '<p>' + barPhoneNumber + '</p>';
//     // APPLY YO HTML
//     document.getElementById("footer_contact_bar").innerHTML = barFooterContact;
//
// }});



// GET BUSINESS JSON
// $.ajax({url: "/wp-content/themes/williamsgroup/assets/js/lib/ph_json.json", success: function(json){
// // Create Variables
//     // address
//     var addressAll = json.result.formatted_address;
//     // telephone
//     var phoneNumber = json.result.formatted_phone_number;
//     // formatted
//     var footerContact =     '<p>' + addressAll + '</p>'
//     + '<p>' + phoneNumber + '</p>';
//     // APPLY YO HTML
//     document.getElementById("footer_contact").innerHTML = footerContact;
// }});

//=======================================
// PURE HAIR REVIEWS
//=======================================

// GET BUSINESS JSON
// https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJz0GnVRxHckgRSGuONsqNpVA&key=AIzaSyCHELusqRwxcdU39sX-vvzvSahqIaCL30A
// $.ajax({url: "/wp-content/themes/williamsgroup/assets/js/lib/ph_json.json", success: function(json){
// // Create Variables
//     // review 1
//     var phReviewRating1 = json.result.reviews[0].rating + " Stars";
//     var phReviewText1 = json.result.reviews[0].text;
//     var phReviewAuthor1 = json.result.reviews[0].author_name;
//     // review 2
//     var phReviewRating2 = json.result.reviews[1].rating + " Stars";
//     var phReviewText2 = json.result.reviews[1].text;
//     var phReviewAuthor2 = json.result.reviews[1].author_name;
//     // formatted
//     var phReviewOne =       '<h3>"' + phReviewText1 + '"</h3>';
//     var phReviewTwo =       '<h3>"' + phReviewText2 + '"</h3>';
//     // APPLY YO HTML
//     document.getElementById("ph_review_text_1").innerHTML = phReviewOne;
//     document.getElementById("ph_review_text_2").innerHTML = phReviewTwo;
// }});

//=======================================
// PURE HAIR CONTACT PAGE
//=======================================

// GET BUSINESS JSON
// $.ajax({url: "/wp-content/themes/williamsgroup/assets/js/lib/ph_json.json", success: function(json){

// // Create Variables
//     // address
//     var phAddressStreet = json.result.address_components[0].long_name;
//     var phAddressTown = json.result.address_components[1].long_name;
//     var phAddressCounty = json.result.address_components[3].long_name;
//     var phAddressPostcode = json.result.address_components[6].long_name;
//     // telephone
//     var phPhoneNumber = json.result.formatted_phone_number;
//     // opening hours
//     var phOpeningHoursMon = json.result.opening_hours.weekday_text[0];
//     var phOpeningHoursTue = json.result.opening_hours.weekday_text[1];
//     var phOpeningHoursWed = json.result.opening_hours.weekday_text[2];
//     var phOpeningHoursThu = json.result.opening_hours.weekday_text[3];
//     var phOpeningHoursFri = json.result.opening_hours.weekday_text[4];
//     var phOpeningHoursSat = json.result.opening_hours.weekday_text[5];
//     var phOpeningHoursSun = json.result.opening_hours.weekday_text[6];
//     // formatted
//     var phContactAddress =    '<div class="mbl pbl rule-bottom"><h4><b>Find Us</b><div></div></h4>'
//                             + '<p>Pure Hair</p>'
//                             + '<p>' + phAddressStreet + '</p>'
//                             + '<p>' + phAddressTown + '</p>'
//                             + '<p>' + phAddressCounty + '</p>'
//                             + '<p>' + phAddressPostcode + '</p></div>';
//     var phContactTel =        '<div class="mbl pbl rule-bottom"><h4><b>Call Us</b><div></div></h4>'
//                             + '<p>' + phPhoneNumber + '</p></div>';
//     var phOpeningHours =    '<div class="mbm"><h4><b>Opening Times</b><div></div></h4>'
//                             + '<p>' + phOpeningHoursMon + '</p>'
//                             + '<p>' + phOpeningHoursTue + '</p>'
//                             + '<p>' + phOpeningHoursWed + '</p>'
//                             + '<p>' + phOpeningHoursThu + '</p>'
//                             + '<p>' + phOpeningHoursFri + '</p>'
//                             + '<p>' + phOpeningHoursSat + '</p>'
//                             + '<p>' + phOpeningHoursSun + '</p></div>';
//     // APPLY YO HTML
//     document.getElementById("contact_details_ph").innerHTML = phContactAddress + phContactTel + phOpeningHours;

// }});

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


// ============================================= PURE HAIR END ===================================================

//
//
//
// //=======================================
// // UNISEX FOOTER
// //=======================================
//
// // GET BUSINESS JSON
// $.ajax({url: "/wp-content/themes/williamsgroup/assets/js/lib/uni_json.json", success: function(json){
//
// // Create Variables
//     // address
//     var uniAddressAll = json.result.formatted_address;
//     // telephone
//     var uniPhoneNumber = json.result.formatted_phone_number;
//     // formatted
//     var uniFooterContact =     '<p>' + uniAddressAll + '</p>'
//                             + '<p>' + uniPhoneNumber + '</p>';
//     // APPLY YO HTML
//     document.getElementById("footer_contact_uni").innerHTML = uniFooterContact;
// }});
//
//
// //=======================================
// // UNISEX REVIEWS
// //=======================================
//
// // GET BUSINESS JSON
// $.ajax({url: "/wp-content/themes/williamsgroup/assets/js/lib/uni_json.json", success: function(json){
//
// // Create Variables
//     // review 1
//     var uniReviewRating1 = json.result.reviews[0].rating + " Stars";
//     var uniReviewText1 = json.result.reviews[0].text;
//     var uniReviewAuthor1 = json.result.reviews[0].author_name;
//     // review 2
//     var uniReviewRating2 = json.result.reviews[1].rating + " Stars";
//     var uniReviewText2 = json.result.reviews[1].text;
//     var uniReviewAuthor2 = json.result.reviews[1].author_name;
//     // formatted
//     var uniReviewOne =       '<h3>' + uniReviewText1 + '</h3>';
//     var uniReviewTwo =       '<h3>' + uniReviewText2 + '</h3>';
//     // APPLY YO HTML
//     document.getElementById("uni_review_text_1").innerHTML = uniReviewOne;
//     document.getElementById("uni_review_text_2").innerHTML = uniReviewTwo;
// }});
//
// //=======================================
// // UNISEX CONTACT PAGE
// //=======================================
//
// // GET BUSINESS JSON
// $.ajax({url: "/wp-content/themes/williamsgroup/assets/js/lib/uni_json.json", success: function(json){
//
// // Create Variables
//     // address
//     var uniAddressNumber = json.result.address_components[0].long_name;
//     var uniAddressStreet = json.result.address_components[1].long_name;
//     var uniAddressTown = json.result.address_components[3].long_name;
//     var uniAddressCounty = json.result.address_components[5].long_name;
//     var uniAddressPostcode = json.result.address_components[7].long_name;
//     // telephone
//     var uniPhoneNumber = json.result.formatted_phone_number;
//     // opening hours
//     var uniOpeningHoursMon = json.result.opening_hours.weekday_text[0];
//     var uniOpeningHoursTue = json.result.opening_hours.weekday_text[1];
//     var uniOpeningHoursWed = json.result.opening_hours.weekday_text[2];
//     var uniOpeningHoursThu = json.result.opening_hours.weekday_text[3];
//     var uniOpeningHoursFri = json.result.opening_hours.weekday_text[4];
//     var uniOpeningHoursSat = json.result.opening_hours.weekday_text[5];
//     var uniOpeningHoursSun = json.result.opening_hours.weekday_text[6];
//     // formatted
//     var uniContactAddress =    '<div class="mbl pbl rule-bottom"><h4><b>Find Us</b></h4>'
//                             + '<p>Unisex</p>'
//                             + '<p>' + uniAddressNumber + ' ' + uniAddressStreet + '</p>'
//                             + '<p>' + uniAddressTown + '</p>'
//                             + '<p>' + uniAddressCounty + '</p>'
//                             + '<p>' + uniAddressPostcode + '</p></div>';
//
//     var uniContactTel=    '<div class="mbl pbl rule-bottom"><h4><b>Call Us</b></h4>'
//                             + '<p>' + uniPhoneNumber + '</p></div>';
//
//     var uniOpeningHours =    '<div class="mbm"><h4><b>Opening Times</b></h4>'
//                             + '<p>' + uniOpeningHoursMon + '</p>'
//                             + '<p>' + uniOpeningHoursTue + '</p>'
//                             + '<p>' + uniOpeningHoursWed + '</p>'
//                             + '<p>' + uniOpeningHoursThu + '</p>'
//                             + '<p>' + uniOpeningHoursFri + '</p>'
//                             + '<p>' + uniOpeningHoursSat + '</p>'
//                             + '<p>' + uniOpeningHoursSun + '</p></div>';
//     // APPLY YO HTML
//     document.getElementById("contact_details_uni").innerHTML = uniContactAddress + uniContactTel + uniOpeningHours;
// }});

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


//
// // ============================================= UNISEX END ===================================================
//
//
//

//
// //=======================================
// // A TOUCH OF BEAUTY FOOTER
// //=======================================
//
// // GET BUSINESS JSON
// $.ajax({url: "/wp-content/themes/williamsgroup/assets/js/lib/atob_json.json", success: function(json){
// // Create Variables
//     // address
//     var atobAddressAll = json.result.formatted_address;
//     // telephone
//     var atobPhoneNumber = json.result.formatted_phone_number;
//     // formatted
//     var atobFooterContact =     '<p>' + atobAddressAll + '</p>'
//     + '<p>' + atob
//     atobPhoneNumber + '</p>';
//     // APPLY YO HTML
//     document.getElementById("footer_contact_atob").innerHTML = atobFooterContact;
// }});
//
// //=======================================
// // A TOUCH OF BEAUTY REVIEWS
// //=======================================
//
// // GET BUSINESS JSON
// $.ajax({url: "/wp-content/themes/williamsgroup/assets/js/lib/atob_json.json", success: function(json){
// // Create Variables
//     // review 1
//     var atobReviewRating1 = json.result.reviews[0].rating + " Stars";
//     var atobReviewText1 = json.result.reviews[0].text;
//     var atobReviewAuthor1 = json.result.reviews[0].author_name;
//     // review 2
//     var atobReviewRating2 = json.result.reviews[1].rating + " Stars";
//     var atobReviewText2 = json.result.reviews[1].text;
//     var atobReviewAuthor2 = json.result.reviews[1].author_name;
//     // formatted
//     var atobReviewOne =       '<h3>' + atobReviewText1 + '</h3>';
//     var atobReviewTwo =       '<h3>' + atobReviewText2 + '</h3>';
//     // APPLY YO HTML
//     document.getElementById("atob_review_text_1").innerHTML = atobReviewOne;
//     document.getElementById("atob_review_text_2").innerHTML = atobReviewTwo;
// }});

// //=======================================
// // A TOUCH OF BEAUTY CONTACT PAGE
// //=======================================
//
// // GET BUSINESS JSON
// $.ajax({url: "/wp-content/themes/williamsgroup/assets/js/lib/atob_json.json", success: function(json){
//     console.log(json);
// // Create Variables
//     // address
//     var atobAddressNum = json.result.address_components[0].long_name;
//     var atobAddressStreet = json.result.address_components[1].long_name;
//     var atobAddressTown = json.result.address_components[2].long_name;
//     var atobAddressCounty = json.result.address_components[4].long_name;
//     var atobAddressPostcode = json.result.address_components[5].long_name;
//     // telephone
//     var atobPhoneNumber = json.result.formatted_phone_number;
//     // opening hours
//     var atobOpeningHoursMon = json.result.opening_hours.weekday_text[0];
//     var atobOpeningHoursTue = json.result.opening_hours.weekday_text[1];
//     var atobOpeningHoursWed = json.result.opening_hours.weekday_text[2];
//     var atobOpeningHoursThu = json.result.opening_hours.weekday_text[3];
//     var atobOpeningHoursFri = json.result.opening_hours.weekday_text[4];
//     var atobOpeningHoursSat = json.result.opening_hours.weekday_text[5];
//     var atobOpeningHoursSun = json.result.opening_hours.weekday_text[6];
//     // formatted
//     var atobContactAddress =    '<div class="mbl pbl rule-bottom"><h4><b>Find Us</b></h4>'
//                             + '<p>A Touch Of Beauty</p>'
//                             + '<p>' + atobAddressNum + ' ' + atobAddressStreet + '</p>'
//                             + '<p>' + atobAddressTown + '</p>'
//                             + '<p>' + atobAddressCounty + '</p>'
//                             + '<p>' + atobAddressPostcode + '</p></div>';
//     var atobContactTel=    '<div class="mbl pbl rule-bottom"><h4><b>Call Us</b></h4>'
//                             + '<p>' + atobPhoneNumber + '</p></div>';
//     var atobOpeningHours =    '<div class="mbm"><h4><b>Opening Times</b></h4>'
//                             + '<p>' + atobOpeningHoursMon + '</p>'
//                             + '<p>' + atobOpeningHoursTue + '</p>'
//                             + '<p>' + atobOpeningHoursWed + '</p>'
//                             + '<p>' + atobOpeningHoursThu + '</p>'
//                             + '<p>' + atobOpeningHoursFri + '</p>'
//                             + '<p>' + atobOpeningHoursSat + '</p>'
//                             + '<p>' + atobOpeningHoursSun + '</p></div>';
//     // APPLY YO HTML
//     document.getElementById("contact_details_atob").innerHTML = atobContactAddress + atobContactTel + atobOpeningHours;
//
// }});

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


// ============================================= A TOUCH OF BEAUTY END ===================================================



//
//
// //=======================================
// // HAIR & CARE 4U FOOTER
// //=======================================
//
// // GET BUSINESS JSON
// $.ajax({url: "/wp-content/themes/williamsgroup/assets/js/lib/hc4u_json.json", success: function(json){
//
// // Create Variables
//     // address
//     var hcAddressAll = json.result.formatted_address;
//     // telephone
//     var hcPhoneNumber = json.result.formatted_phone_number;
//     // formatted
//     var hcFooterContact =     '<p>' + hcAddressAll + '</p>'
//                             + '<p>' + hcPhoneNumber + '</p>';
//     // APPLY YO HTML
//     document.getElementById("footer_contact_hc").innerHTML = hcFooterContact;
// }});
//
//
// //=======================================
// // HAIR & CARE 4U REVIEWS
// //=======================================
//
// // GET BUSINESS JSON
// $.ajax({url: "/wp-content/themes/williamsgroup/assets/js/lib/hc4u_json.json", success: function(json){
//
// // Create Variables
//     // review 1
//     var hcReviewRating1 = json.result.reviews[0].rating + " Stars";
//     var hcReviewText1 = json.result.reviews[0].text;
//     var hcReviewAuthor1 = json.result.reviews[0].author_name;
//     // review 2
//     var hcReviewRating2 = json.result.reviews[1].rating + " Stars";
//     var hcReviewText2 = json.result.reviews[1].text;
//     var hcReviewAuthor2 = json.result.reviews[1].author_name;
//     // formatted
//     var hcReviewOne =       '<h3>' + hcReviewText1 + '</h3>';
//     var hcReviewTwo =       '<h3>' + hcReviewText2 + '</h3>';
//     // APPLY YO HTML
//     document.getElementById("hc_review_text_1").innerHTML = hcReviewOne;
//     document.getElementById("hc_review_text_2").innerHTML = hcReviewTwo;
//
// }});
//
//
// //=======================================
// // HAIR & CARE 4U CONTACT PAGE
// //=======================================
//
// // GET BUSINESS JSON
// $.ajax({url: "/wp-content/themes/williamsgroup/assets/js/lib/hc4u_json.json", success: function(json){
//
// // Create Variables
//     // address
//     var hcAddressNumber = json.result.address_components[0].long_name;
//     var hcAddressStreet = json.result.address_components[1].long_name;
//     var hcAddressStreetTwo = json.result.address_components[2].long_name;
//     var hcAddressTown = json.result.address_components[3].long_name;
//     var hcAddressCounty = json.result.address_components[5].long_name;
//     var hcAddressPostcode = json.result.address_components[7].long_name;
//     // telephone
//     var hcPhoneNumber = json.result.formatted_phone_number;
//     // opening hours
//     var hcOpeningHoursMon = json.result.opening_hours.weekday_text[0];
//     var hcOpeningHoursTue = json.result.opening_hours.weekday_text[1];
//     var hcOpeningHoursWed = json.result.opening_hours.weekday_text[2];
//     var hcOpeningHoursThu = json.result.opening_hours.weekday_text[3];
//     var hcOpeningHoursFri = json.result.opening_hours.weekday_text[4];
//     var hcOpeningHoursSat = json.result.opening_hours.weekday_text[5];
//     var hcOpeningHoursSun = json.result.opening_hours.weekday_text[6];
//     // formatted
//     var hcContactAddress =    '<div class="mbl pbl rule-bottom"><h4><b>Find Us</b></h4>'
//                             + '<p>Hair & Care 4U</p>'
//                             + '<p>' + hcAddressNumber + ' ' + hcAddressStreet + '</p>'
//                             + '<p>' + hcAddressStreetTwo + '</p>'
//                             + '<p>' + hcAddressTown + '</p>'
//                             + '<p>' + hcAddressCounty + '</p>'
//                             + '<p>' + hcAddressPostcode + '</p></div>';
//     var hcContactTel=    '<div class="mbl pbl rule-bottom"><h4><b>Call Us</b></h4>'
//                             + '<p>' + hcPhoneNumber + '</p></div>';
//     var hcOpeningHours =    '<div class="mbm"><h4><b>Opening Times</b></h4>'
//                             + '<p>' + hcOpeningHoursMon + '</p>'
//                             + '<p>' + hcOpeningHoursTue + '</p>'
//                             + '<p>' + hcOpeningHoursWed + '</p>'
//                             + '<p>' + hcOpeningHoursThu + '</p>'
//                             + '<p>' + hcOpeningHoursFri + '</p>'
//                             + '<p>' + hcOpeningHoursSat + '</p>'
//                             + '<p>' + hcOpeningHoursSun + '</p></div>';
//     // APPLY YO HTML
//     document.getElementById("contact_details_hc").innerHTML = hcContactAddress + hcContactTel + hcOpeningHours;
// }});
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




// // ============================================= HAIR & CARE 4U END ===================================================
//
//
//
//
//
// //=======================================
// // BEAUTY BAR FOOTER
// //=======================================
//
// // GET BUSINESS JSON
// $.ajax({url: "/wp-content/themes/williamsgroup/assets/js/lib/bar_json.json", success: function(json){
//
// // Create Variables
//     // address
//     var barAddressAll = json.result.formatted_address;
//     // telephone
//     var barPhoneNumber = json.result.formatted_phone_number;
//     //formatted
//     var barFooterContact =     '<p>' + barAddressAll + '</p>'
//                             + '<p>' + barPhoneNumber + '</p>';
//     // APPLY YO HTML
//     document.getElementById("footer_contact_bar").innerHTML = barFooterContact;
//
// }});
//
// //=======================================
// // BEAUTY BAR REVIEWS
// //=======================================
//
// // GET BUSINESS JSON
// $.ajax({url: "/wp-content/themes/williamsgroup/assets/js/lib/bar_json.json", success: function(json){
//
// // Create Variables
//     // review 1
//     var barReviewRating1 = json.result.reviews[0].rating + " Stars";
//     var barReviewText1 = json.result.reviews[0].text;
//     var barReviewAuthor1 = json.result.reviews[0].author_name;
//     // review 2
//     var barReviewRating2 = json.result.reviews[1].rating + " Stars";
//     var barReviewText2 = json.result.reviews[1].text;
//     var barReviewAuthor2 = json.result.reviews[1].author_name;
//     // formatted
//     var barReviewOne =       '<h3>' + barReviewText1 + '</h3>';
//     var barReviewTwo =       '<h3>' + barReviewText2 + '</h3>';
//     // APPLY YO HTML
//     document.getElementById("bar_review_text_1").innerHTML = barReviewOne;
//     document.getElementById("bar_review_text_2").innerHTML = barReviewTwo;
//
// }});
//
// //=======================================
// // BEAUTY BAR CONTACT PAGE
// //=======================================
//
// // GET BUSINESS JSON
// $.ajax({url: "/wp-content/themes/williamsgroup/assets/js/lib/bar_json.json", success: function(json){
//
// // Create Variables
//     // address
//     var barAddressNumber = json.result.address_components[0].long_name;
//     var barAddressStreet = json.result.address_components[1].long_name;
//     var barAddressTown = json.result.address_components[2].long_name;
//     var barAddressCounty = json.result.address_components[4].long_name;
//     var barAddressPostcode = json.result.address_components[6].long_name;
//     // telephone
//     var barPhoneNumber = json.result.formatted_phone_number;
//     // opening hours
//     var barOpeningHoursMon = json.result.opening_hours.weekday_text[0];
//     var barOpeningHoursTue = json.result.opening_hours.weekday_text[1];
//     var barOpeningHoursWed = json.result.opening_hours.weekday_text[2];
//     var barOpeningHoursThu = json.result.opening_hours.weekday_text[3];
//     var barOpeningHoursFri = json.result.opening_hours.weekday_text[4];
//     var barOpeningHoursSat = json.result.opening_hours.weekday_text[5];
//     var barOpeningHoursSun = json.result.opening_hours.weekday_text[6];
//
//     var barContactAddress =    '<div class="mbl pbl rule-bottom"><h4><b>Find Us</b></h4>'
//                             + '<p>Beauty Bar</p>'
//                             + '<p>' + barAddressNumber + ' ' + barAddressStreet + '</p>'
//                             + '<p>' + barAddressTown + '</p>'
//                             + '<p>' + barAddressCounty + '</p>'
//                             + '<p>' + barAddressPostcode + '</p></div>';
//
//     var barContactTel=    '<div class="mbl pbl rule-bottom"><h4><b>Call Us</b></h4>'
//                             + '<p>' + barPhoneNumber + '</p></div>';
//
//     var barOpeningHours =    '<div class="mbm"><h4><b>Opening Times</b></h4>'
//                             + '<p>' + barOpeningHoursMon + '</p>'
//                             + '<p>' + barOpeningHoursTue + '</p>'
//                             + '<p>' + barOpeningHoursWed + '</p>'
//                             + '<p>' + barOpeningHoursThu + '</p>'
//                             + '<p>' + barOpeningHoursFri + '</p>'
//                             + '<p>' + barOpeningHoursSat + '</p>'
//                             + '<p>' + barOpeningHoursSun + '</p></div>';
//     // APPLY YO HTML
//     document.getElementById("contact_details_bar").innerHTML = barContactAddress + barContactTel + barOpeningHours;
// }});
//

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
