// ===================================================
// CHANGE BRAND COLOR DEPENDANT ON URL
// ===================================================

var rlUrl = window.location.hostname;
var sheet = window.document.styleSheets[0]
// var brandColor;

if ( rlUrl.indexOf('purehairsherborne.co.uk') >= 0){
    var brandColor = "#0072bc";
}
else if ( rlUrl.indexOf('beautybaryeovil.co.uk') >= 0){
    var brandColor = "#94c11f";
}
else if ( rlUrl.indexOf('unisexyeovil.co.uk') >= 0){
    var brandColor = "black";
}
else if ( rlUrl.indexOf('hairandcare4u.co.uk') >= 0){
    var brandColor = "#d8493a";
}

sheet.insertRule(".button { background: " + brandColor + "; border-color: " + brandColor + "; } ", sheet.cssRules.length);
sheet.insertRule(".button:hover { border-color: " + brandColor + "; color: " + brandColor + "; }", sheet.cssRules.length);
sheet.insertRule(".button-alt:hover { background: " + brandColor + "; border-color: " + brandColor + "; }", sheet.cssRules.length);
sheet.insertRule(".about h3 div { border-bottom: 2px solid " + brandColor + "; }", sheet.cssRules.length);
sheet.insertRule(".accordion-wrap .accordion { color: " + brandColor + "; }", sheet.cssRules.length);
sheet.insertRule("#contact_details h4 { color: " + brandColor + "; }", sheet.cssRules.length);
sheet.insertRule(".contact h4 div { border-bottom: 2px solid " + brandColor + "; } ", sheet.cssRules.length);
sheet.insertRule(".logo-strap { border-top: 5px solid " + brandColor + "; } ", sheet.cssRules.length);
sheet.insertRule("nav .link:hover { color: " + brandColor + "; }", sheet.cssRules.length);
sheet.insertRule(".scroll-nav .nav-link-wrap .book { background-color: " + brandColor + "; }", sheet.cssRules.length);
sheet.insertRule(".scroll-nav .nav-link-wrap .book { background-color: " + brandColor + "; }", sheet.cssRules.length);
sheet.insertRule(".price-content-wrap ul h5 { color: " + brandColor + "; }", sheet.cssRules.length);
// .twitter:hover { background-image: url('data:image/svg+xml;utf8,<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1792 1792" style="enable-background:new 0 0 1792 1792; fill:#0072bc;" xml:space="preserve"><path d="M1684,408c-44.7,65.3-98.7,121-162,167c0.7,9.3,1,23.3,1,42c0,86.7-12.7,173.2-38,259.5s-63.8,169.2-115.5,248.5 s-113.2,149.5-184.5,210.5s-157.3,109.7-258,146S718.7,1536,604,1536c-180.7,0-346-48.3-496-145c23.3,2.7,49.3,4,78,4 c150,0,283.7-46,401-138c-70-1.3-132.7-22.8-188-64.5s-93.3-94.8-114-159.5c22,3.3,42.3,5,61,5c28.7,0,57-3.7,85-11 c-74.7-15.3-136.5-52.5-185.5-111.5S172,788,172,710v-4c45.3,25.3,94,39,146,41c-44-29.3-79-67.7-105-115s-39-98.7-39-154 c0-58.7,14.7-113,44-163c80.7,99.3,178.8,178.8,294.5,238.5S752,646.3,884,653c-5.3-25.3-8-50-8-74c0-89.3,31.5-165.5,94.5-228.5 S1109.7,256,1199,256c93.3,0,172,34,236,102c72.7-14,141-40,205-78c-24.7,76.7-72,136-142,178C1560,451.3,1622,434.7,1684,408z"/></svg>'); }

// ===================================================
// FOOTER IMAGE BASED ON URL
// ===================================================

var rlUrl = window.location.hostname;
var footerImage;

if ( rlUrl.indexOf('purehairsherborne.co.uk') >= 0){
  var footerImage = 'ph_logo_alt_white.png';
}
else if ( rlUrl.indexOf('beautybaryeovil.co.uk') >= 0){
  var footerImage = 'bar_logo_alt_white.png';
}
else if ( rlUrl.indexOf('unisexyeovil.co.uk') >= 0){
  var footerImage = 'uni_logo_alt_white.png';
}
else if ( rlUrl.indexOf('hairandcare4u.co.uk') >= 0){
  var footerImage = 'hc_logo_alt_white.png';
}

var footerImageBuild = '<img src="/wp-content/themes/williamsgroup/assets/img/' + footerImage + '" alt="Alt Logo">';
document.getElementById("footer_image").innerHTML = footerImageBuild;
