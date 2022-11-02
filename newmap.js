<!DOCTYPE html>
<html lang="en-US">

<head>
    <!-- Required meta tags -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
       <!-- =========== -->
    <meta name="viewport" content="width=device-width, user-scalable=no">
    <title>Map</title>

    

<style id='global-styles-inline-css' type='text/css'>
body{--wp--preset--color--black: #000000;--wp--preset--color--cyan-bluish-gray: #abb8c3;--wp--preset--color--white: #ffffff;--wp--preset--color--pale-pink: #f78da7;--wp--preset--color--vivid-red: #cf2e2e;--wp--preset--color--luminous-vivid-orange: #ff6900;--wp--preset--color--luminous-vivid-amber: #fcb900;--wp--preset--color--light-green-cyan: #7bdcb5;--wp--preset--color--vivid-green-cyan: #00d084;--wp--preset--color--pale-cyan-blue: #8ed1fc;--wp--preset--color--vivid-cyan-blue: #0693e3;--wp--preset--color--vivid-purple: #9b51e0;--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple: linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%);--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan: linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%);--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange: linear-gradient(135deg,rgba(252,185,0,1) 0%,rgba(255,105,0,1) 100%);--wp--preset--gradient--luminous-vivid-orange-to-vivid-red: linear-gradient(135deg,rgba(255,105,0,1) 0%,rgb(207,46,46) 100%);--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray: linear-gradient(135deg,rgb(238,238,238) 0%,rgb(169,184,195) 100%);--wp--preset--gradient--cool-to-warm-spectrum: linear-gradient(135deg,rgb(74,234,220) 0%,rgb(151,120,209) 20%,rgb(207,42,186) 40%,rgb(238,44,130) 60%,rgb(251,105,98) 80%,rgb(254,248,76) 100%);--wp--preset--gradient--blush-light-purple: linear-gradient(135deg,rgb(255,206,236) 0%,rgb(152,150,240) 100%);--wp--preset--gradient--blush-bordeaux: linear-gradient(135deg,rgb(254,205,165) 0%,rgb(254,45,45) 50%,rgb(107,0,62) 100%);--wp--preset--gradient--luminous-dusk: linear-gradient(135deg,rgb(255,203,112) 0%,rgb(199,81,192) 50%,rgb(65,88,208) 100%);--wp--preset--gradient--pale-ocean: linear-gradient(135deg,rgb(255,245,203) 0%,rgb(182,227,212) 50%,rgb(51,167,181) 100%);--wp--preset--gradient--electric-grass: linear-gradient(135deg,rgb(202,248,128) 0%,rgb(113,206,126) 100%);--wp--preset--gradient--midnight: linear-gradient(135deg,rgb(2,3,129) 0%,rgb(40,116,252) 100%);--wp--preset--duotone--dark-grayscale: url('#wp-duotone-dark-grayscale');--wp--preset--duotone--grayscale: url('#wp-duotone-grayscale');--wp--preset--duotone--purple-yellow: url('#wp-duotone-purple-yellow');--wp--preset--duotone--blue-red: url('#wp-duotone-blue-red');--wp--preset--duotone--midnight: url('#wp-duotone-midnight');--wp--preset--duotone--magenta-yellow: url('#wp-duotone-magenta-yellow');--wp--preset--duotone--purple-green: url('#wp-duotone-purple-green');--wp--preset--duotone--blue-orange: url('#wp-duotone-blue-orange');--wp--preset--font-size--small: 13px;--wp--preset--font-size--medium: 20px;--wp--preset--font-size--large: 36px;--wp--preset--font-size--x-large: 42px;}.has-black-color{color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-color{color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-color{color: var(--wp--preset--color--white) !important;}.has-pale-pink-color{color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-color{color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-color{color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-color{color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-color{color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-color{color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-color{color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-color{color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-color{color: var(--wp--preset--color--vivid-purple) !important;}.has-black-background-color{background-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-background-color{background-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-background-color{background-color: var(--wp--preset--color--white) !important;}.has-pale-pink-background-color{background-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-background-color{background-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-background-color{background-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-background-color{background-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-background-color{background-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-background-color{background-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-background-color{background-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-background-color{background-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-background-color{background-color: var(--wp--preset--color--vivid-purple) !important;}.has-black-border-color{border-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-border-color{border-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-border-color{border-color: var(--wp--preset--color--white) !important;}.has-pale-pink-border-color{border-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-border-color{border-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-border-color{border-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-border-color{border-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-border-color{border-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-border-color{border-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-border-color{border-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-border-color{border-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-border-color{border-color: var(--wp--preset--color--vivid-purple) !important;}.has-vivid-cyan-blue-to-vivid-purple-gradient-background{background: var(--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple) !important;}.has-light-green-cyan-to-vivid-green-cyan-gradient-background{background: var(--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan) !important;}.has-luminous-vivid-amber-to-luminous-vivid-orange-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange) !important;}.has-luminous-vivid-orange-to-vivid-red-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-orange-to-vivid-red) !important;}.has-very-light-gray-to-cyan-bluish-gray-gradient-background{background: var(--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray) !important;}.has-cool-to-warm-spectrum-gradient-background{background: var(--wp--preset--gradient--cool-to-warm-spectrum) !important;}.has-blush-light-purple-gradient-background{background: var(--wp--preset--gradient--blush-light-purple) !important;}.has-blush-bordeaux-gradient-background{background: var(--wp--preset--gradient--blush-bordeaux) !important;}.has-luminous-dusk-gradient-background{background: var(--wp--preset--gradient--luminous-dusk) !important;}.has-pale-ocean-gradient-background{background: var(--wp--preset--gradient--pale-ocean) !important;}.has-electric-grass-gradient-background{background: var(--wp--preset--gradient--electric-grass) !important;}.has-midnight-gradient-background{background: var(--wp--preset--gradient--midnight) !important;}.has-small-font-size{font-size: var(--wp--preset--font-size--small) !important;}.has-medium-font-size{font-size: var(--wp--preset--font-size--medium) !important;}.has-large-font-size{font-size: var(--wp--preset--font-size--large) !important;}.has-x-large-font-size{font-size: var(--wp--preset--font-size--x-large) !important;}
</style>

<link rel='stylesheet' id='contact-form-7-css'  href='https://mediserv.com.sa/wp-content/plugins/contact-form-7/includes/css/styles.css?ver=5.5.6' type='text/css' media='all' />

<link rel='stylesheet' id='wpml-legacy-vertical-list-0-css'  href='//mediserv.com.sa/wp-content/plugins/sitepress-multilingual-cms/templates/language-switchers/legacy-list-vertical/style.min.css?ver=1' type='text/css' media='all' />

<link rel='stylesheet' id='site-styles-css'  href='https://mediserv.com.sa/wp-content/themes/mediserv/style.css?v=1458669389&#038;ver=5.9.3' type='text/css' media='all' />

<link rel='stylesheet' id='custom-fonts-css'  href='https://mediserv.com.sa/wp-content/themes/mediserv/css/fonts.css?v=531291425&#038;ver=5.9.3' type='text/css' media='all' />

<link rel='stylesheet' id='fontawesome-css'  href='https://mediserv.com.sa/wp-content/themes/mediserv/css/all.min.css?ver=5.9.3' type='text/css' media='all' />

<script type='text/javascript' src='https://mediserv.com.sa/wp-includes/js/jquery/jquery.min.js?ver=3.6.0' id='jquery-core-js'></script>

<script type='text/javascript' src='https://mediserv.com.sa/wp-content/themes/mediserv/js/scripts.js?v=484822137&#038;ver=5.9.3' id='custom-js'></script>


<style type="text/css" id="wp-custom-css">
            .box{   
  padding: 30px;
  border:2px solid black;
  margin: 0;
}

.frm_button_submit{
    background-color:#38c464 !important;
}

.frm_form_fields:lang(ar){
    direction:rtl;
    text-align:right;
}

label:lang(ar), .frm_primary_label:lang(ar){
    text-align:right !important;
}

select:lang(ar){
    height:40px;
}
.map-tag-list {
  display: flex;
  padding: 10px;
  align-items: center;
  border-top: 1px solid #fff;
  background-color: #f0f0f0;
}
.map-list-item {
  display: flex;
  margin-right: 13px;
  margin-left: 13px;
  align-items: center;
  cursor: pointer;
}
.map-list-img {
  display: block;
  width: 24px;
  margin-right: 5px;
}
.map-list-info {
  font-family: Oswald, sans-serif;
  color: #5b5e6b;
  font-weight: 400;
}
.location {
  display: none;
  margin-bottom: 0px;
  padding-top: 0px;
  align-items: center;
}
.location-drowpdown-title {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  max-width: 100%;
  padding: 15px 20px;
  justify-content: space-between;
  align-items: center;
  border-style: solid;
  border-width: 0px 0px 1px;
  border-color: transparent transparent #e6e6e6;
  background-color: #f8f8f8;
  font-size: 15px;
}
.location-tag {
  display: flex;
  width: 85%;
  align-items: center;
  cursor: pointer;
}
.location-btn {
  display: block;
  padding: 8px 11px;
  justify-content: center;
  align-items: center;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  background-color: transparent;
  -webkit-transition: all 300ms ease-in-out;
  transition: all 300ms ease-in-out;
  font-family: 'Open Sans', sans-serif;
  color: #535d66;
  font-size: 14px;
  line-height: 1em;
  text-decoration: none;
}
.location-img {
  display: block;
  width: 25px;
  margin-right: 14px;
}
.location-inner-title {
  font-family: 'Open Sans', sans-serif;
}
.location-dropdown-list {
    display: none;
  padding: 20px;
  border-style: solid;
  border-width: 1px;
  border-color: transparent transparent #e6e6e6;
  background-color: #efefef;
}
.address-location {
  margin-bottom: 15px;
  font-family: 'Open Sans', sans-serif;
  font-size: 15px;
  font-weight: 400;
}
.address-location a {
  color: red;
  line-height: 150%;
  text-decoration: none;
}
.directions-btn,
.address-location .get-direction-btn{
  display: inline-block;
  padding: 14px;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  background-color: #61849c;
  -webkit-transition: all 300ms ease-in-out;
  transition: all 300ms ease-in-out;
  color: #fff;
  font-size: 14px;
  line-height: 1em;
  margin-top: 10px;
}
.directions-btn.directions-btn-alt {
  margin-left: 8px;
  background-color: #d2845b;
}
.gm-style table img{
    width: 20px;
}
.address-location .get-direction-btn img{
    display: none;
}
.address-location .get-direction-btn{

}
.map-area{
    height: auto;
}
.footer-map-wrap #map{
    height: 500px;
}
</style>


</head>

<!-- <body style="overflow-x: hidden;"> -->
<body class="home page-template page-template-templates page-template-tpl-home page-template-templatestpl-home-php page page-id-5">

<!--Footer start -->
<div class="footer-map-wrap">
    <div class="footerMap-btn">
        <a class="btn map-corporate-office map-btn" href="" data-id="map-corporate-office"><svg xmlns="http://www.w3.org/2000/svg" width="10.569" height="15.099" viewBox="0 0 10.569 15.099"><path id="Icon_material-location-on" data-name="Icon material-location-on" d="M12.785,3A5.281,5.281,0,0,0,7.5,8.285c0,3.964,5.285,9.814,5.285,9.814s5.285-5.851,5.285-9.814A5.281,5.281,0,0,0,12.785,3Zm0,7.172a1.887,1.887,0,1,1,1.887-1.887A1.888,1.888,0,0,1,12.785,10.172Z" transform="translate(-7.5 -3)" fill="#5c5c5c"/></svg><span>Corporate Office</span></a>
        <a class="btn map-distribution map-btn" href="" data-id="map-distribution"><svg xmlns="http://www.w3.org/2000/svg" width="20.251" height="15.099" viewBox="0 0 20.251 15.099"><path id="Path_2094" data-name="Path 2094" d="M.9,15.358h.361v4.861a.773.773,0,0,0,.774.774h.428a.773.773,0,0,0,.774-.774v-3.96a.765.765,0,0,1,.771-.765l1.808.014a.765.765,0,0,1,.759.765v3.945a.773.773,0,0,0,.774.774H18.215a.773.773,0,0,0,.774-.773c0-1.544,0-4.861,0-4.861h.36a.9.9,0,0,0,.878-1.1l-1.54-6.471A2.459,2.459,0,0,0,16.3,5.893H3.953a2.458,2.458,0,0,0-2.388,1.89l-1.54,6.47A.9.9,0,0,0,.9,15.358Zm7.889.586a.586.586,0,0,1,.586-.586h6.384a.586.586,0,0,1,.585.586v2.32a.585.585,0,0,1-.585.585H9.376a.586.586,0,0,1-.586-.585v-2.32Z" transform="translate(-0.001 -5.893)" fill="#5c5c5c"/></svg><span>Distribution</span></a>
        <a class="btn map-marine map-btn" href="" data-id="map-marine"><svg xmlns="http://www.w3.org/2000/svg" width="20.251" height="15.099" viewBox="0 0 20.251 15.099"><path id="Path_2094" data-name="Path 2094" d="M.9,15.358h.361v4.861a.773.773,0,0,0,.774.774h.428a.773.773,0,0,0,.774-.774v-3.96a.765.765,0,0,1,.771-.765l1.808.014a.765.765,0,0,1,.759.765v3.945a.773.773,0,0,0,.774.774H18.215a.773.773,0,0,0,.774-.773c0-1.544,0-4.861,0-4.861h.36a.9.9,0,0,0,.878-1.1l-1.54-6.471A2.459,2.459,0,0,0,16.3,5.893H3.953a2.458,2.458,0,0,0-2.388,1.89l-1.54,6.47A.9.9,0,0,0,.9,15.358Zm7.889.586a.586.586,0,0,1,.586-.586h6.384a.586.586,0,0,1,.585.586v2.32a.585.585,0,0,1-.585.585H9.376a.586.586,0,0,1-.586-.585v-2.32Z" transform="translate(-0.001 -5.893)" fill="#5c5c5c"/></svg><span>Marine</span></a>
    </div>
    <div class="map-area">
        <div id="map"></div>
        <div class="map-tag-list">
            <div class="map-list-item all-locations map-btn">
                <img src="https://global-uploads.webflow.com/5e20e3f684fda680fd838ac4/635b70debd955974e02a8e2a_Untitled-1_03.jpg" loading="lazy" alt="" class="map-list-img">
                <div class="map-list-info">All Locations</div>
            </div>
            <div class="map-list-item map-corporate-office map-btn" data-id="map-corporate-office">
                <img src="http://mohammadharoon.com/demo/map-icons/map-marker-black.svg" loading="lazy" alt="" class="map-list-img">
                <div class="map-list-info">Corporate Office</div>
            </div>
            <div class="map-list-item map-distribution map-btn" data-id="map-distribution">
                <img src="http://mohammadharoon.com/demo/map-icons/map-marker-red.svg" loading="lazy" alt="" class="map-list-img">
                <div class="map-list-info">Distribution</div>
            </div>
            <div class="map-list-item map-marine map-btn" data-id="map-marine">
                <img src="http://mohammadharoon.com/demo/map-icons/map-marker-blue.svg" loading="lazy" alt="" class="map-list-img">
                <div class="map-list-info">Marine</div>
            </div>
        </div>
    </div>
</div>
<div id="results"></div>
<!-- <script type="text/javascript" src="https://mediserv.brackets-tech.com/wp-includes/js/jquery/jquery.min.js?ver=3.6.0"></script> -->
<style type="text/css">
    .rtl .get-direction-btn img{
        transform: rotate(180deg);
    }
    .map-btn.current{
        pointer-events: none;
    }
    #results{
        display: none;
    }
    #results .location-drowpdown-title{
        display: none;
    }
    #results.map-marine .location-drowpdown-title[data-class="Marine"]{
        display: flex;
    }
    #results.map-distribution .location-drowpdown-title[data-class="Distribution"]{
        display: flex;
    }
    #results.map-corporate-office .location-drowpdown-title[data-class="Corporate Office"]{
        display: flex;
    }
    .location-tag{
        position: relative;
        padding-left: 40px;
    }
    .location-tag::before{
        content: '';
        display: block;
        position: absolute;
        top: 50%;
        left: 0;
        width: 25px;
        height: 37px;
        background-size: 100%;
        background-position: 0 0;
        transform: translateY(-50%);
        background-repeat: no-repeat;
    }
    .location-drowpdown-title[data-class="Marine"] .location-tag::before{
        background-image: url('http://mohammadharoon.com/demo/map-icons/map-marker-blue.svg');
    }
    .location-drowpdown-title[data-class="Distribution"] .location-tag::before{
        background-image: url('http://mohammadharoon.com/demo/map-icons/map-marker-red.svg');
    }
    .location-drowpdown-title[data-class="Corporate Office"] .location-tag::before{
        background-image: url('http://mohammadharoon.com/demo/map-icons/map-marker-black.svg');
    }
</style>
<script type="text/javascript">
    var map;
var locations = [];
var gmarkers1 = [];
var infoWindowMyLocation
var infowindow;

function initMap() {
  
    // if (jQuery("body").hasClass("rtl")) { 
    locations = [
                ["Economy Boat Store","36.942680","-84.789190","Economy Boat Store","<table><tr><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/phone-icon.svg' alt='phone icon'><\/td> <td><a href='tel:2514330066'>(251) 433-0066<\/td><\/tr><tr><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/box.svg' alt='pobox icon'><\/td><td>Mobile, AL 36602<\/td><\/tr><tr><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/loc.svg' alt='details icon'><\/td> <td>‍‍115 Cochran Causeway<\/td><\/tr></table><a class='get-direction-btn' target='_blank' href='https://goo.gl/maps/5y3trpDBCtkKbRAW7'>Get Directions <img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/arrow-right_.svg' alt='direction arrow'><\/a>","","Marine"],
                ["WOODRIVER (ECONOMY BOAT STORE)","38.85001","-90.10814","WOODRIVER (ECONOMY BOAT STORE)","<table><tr><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/phone-icon.svg' alt='phone icon'><\/td> <td><a href='tel:2514330066'>(251) 433-0066<\/td><\/tr><tr><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/box.svg' alt='pobox icon'><\/td><td>200 South Amoco Cutoff, P.O. Box 589<\/td><\/tr><tr><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/loc.svg' alt='details icon'><\/td> <td>Wood River, IL 62095<\/td><\/tr></table><a class='get-direction-btn' target='_blank' href='https://goo.gl/maps/P1h3Yorgb5o8mQNj6'>Get Directions <img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/arrow-right_.svg' alt='direction arrow'><\/a>","","Marine"],
                ["WICKLIFFE (ECONOMY BOAT STORE)","36.96605","-89.09331","WICKLIFFE (ECONOMY BOAT STORE)","<table><tr><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/phone-icon.svg' alt='phone icon'><\/td> <td><a href='tel:2703353189'>(270) 335-3189<\/td><\/tr><tr><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/box.svg' alt='pobox icon'><\/td><td>169 River Cir Dr.<\/td><\/tr><tr><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/loc.svg' alt='details icon'><\/td> <td>Wickliffe, KY 42087<\/td><\/tr></table><a class='get-direction-btn' target='_blank' href='https://goo.gl/maps/yPZrq5FhV98zbhtYA'>Get Directions <img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/arrow-right_.svg' alt='direction arrow'><\/a>","","Marine"],
                ["Baton Rouge","30.38722","-91.21498","Baton Rouge","<table><tr><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/phone-icon.svg' alt='phone icon'><\/td> <td><a href='tel:2258191743'>(225) 819-1743<\/td><\/tr><tr><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/box.svg' alt='pobox icon'><\/td><td>6012 South River Rd<\/td><\/tr><tr><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/loc.svg' alt='details icon'><\/td> <td>Baton Rouge, LA 70820<\/td><\/tr></table><a class='get-direction-btn' target='_blank' href='https://goo.gl/maps/tBTQZHEHYzGq1wLR9'>Get Directions <img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/arrow-right_.svg' alt='direction arrow'><\/a>","","Marine"],
                ["St Louis","38.58148","-90.22106","St Louis","<table><tr><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/phone-icon.svg' alt='phone icon'><\/td> <td><a href='tel:3147413667'>(314) 741-3667<\/td><\/tr><tr><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/box.svg' alt='pobox icon'><\/td><td>3854 South First St<\/td><\/tr><tr><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/loc.svg' alt='details icon'><\/td> <td>St Louis, MO 63118<\/td><\/tr></table><a class='get-direction-btn' target='_blank' href='https://goo.gl/maps/cUNvrj9T1KrBZmSUA'>Get Directions <img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/arrow-right_.svg' alt='direction arrow'><\/a>","","Marine"],
                ["MEMPHIS","35.12370","-90.07289","MEMPHIS","<table><tr><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/phone-icon.svg' alt='phone icon'><\/td><td><a href='tel:9017753131'>(901) 775-3131<\/td><\/tr><tr><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/box.svg' alt='pobox icon'><\/td><td>389 West Illinois Ave., P.O. Box 56<\/td><\/tr><tr><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/loc.svg' alt='details icon'><\/td> <td>Memphis, TN 38101<\/td><\/tr></table><a class='get-direction-btn' target='_blank' href='https://goo.gl/maps/Z9FxZafACn4YWhVx8'>Get Directions <img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/arrow-right_.svg' alt='direction arrow'><\/a>","","Marine"],
                ["Houston","29.78726","-95.09482","Houston","<table><tr><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/phone-icon.svg' alt='phone icon'><\/td><td><a href='tel:8324353132'>8324353132<\/td><\/tr><tr><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/box.svg' alt='pobox icon'><\/td><td>Channelview, TX 77530<\/td><\/tr><tr><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/loc.svg' alt='details icon'><\/td> <td>17002 Market St<\/td><\/tr></table><a class='get-direction-btn' target='_blank' href='https://goo.gl/maps/DxmK3iAxzurvsA6h7'>Get Directions <img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/arrow-right_.svg' alt='direction arrow'><\/a>","","Marine"],



                ["Damascus","33.513805","36.276527","Damascus","<table><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/box.svg' alt='pobox icon'><\/td><td>1894 Hwy 124<\/td><\/tr><tr><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/loc.svg' alt='details icon'><\/td> <td>Damascus, AR 72039<\/td><\/tr></table><a class='get-direction-btn' target='_blank' href='https://goo.gl/maps/E4CtkVsvhc6tz7YS9'>Get Directions <img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/arrow-right_.svg' alt='direction arrow'><\/a>","","Distribution"],
                ["phoneix","32.172852","-81.324310","phoneix","<table><tr><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/phone-icon.svg' alt='details icon'><\/td> <td><a>623.300.7960<\/td><\/tr><tr><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/box.svg' alt='details icon'><\/td> <td>3620 E Roeser Road<\/td><\/tr><tr><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/loc.svg' alt='details icon'><\/td> <td>Phoenix, AZ 85040<\/td><\/tr></table><a class='get-direction-btn' target='_blank' href='https://goo.gl/maps/MW6G6Ar4r7uRiiCY9'>Get Directions <img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/arrow-right_.svg' alt='direction arrow'><\/a>","","Distribution"],
                ["BISHOP","37.361408","-118.395271","BISHOP","<table><tr><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/box.svg' alt='details icon'><\/td> <td>481 East Line Rd<\/td><\/tr><tr><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/loc.svg' alt='details icon'><\/td> <td>Bishop, CA 93514<\/td><\/tr></table><a class='get-direction-btn' target='_blank' https://goo.gl/maps/bDjUNWhh89YztzYi6'> Get Directions <img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/arrow-right_.svg' alt='direction arrow'><\/a>","","Distribution"],
                ["EAST RANCHO DOMINGUEZ","33.896149","-118.194519","EAST RANCHO DOMINGUEZ","<table><tr><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/box.svg' alt='details icon'><\/td> <td>19501 S Santa Fe Ave<\/td><\/tr><tr><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/loc.svg' alt='details icon'><\/td> <td>East Rancho Dominguez, CA 90221<\/td><\/tr></table><a class='get-direction-btn' target='_blank' href='https://goo.gl/maps/xNnwXPQRZhB51g6WA'> Get Directions <img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/arrow-right_.svg' alt='direction arrow'><\/a>","","Distribution"],
                ["HUNTINGTON BEACH","33.659771","-117.999313","HUNTINGTON BEACH","<table><tr><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/box.svg' alt='details icon'><\/td> <td>15922 Pacific Coast Highway<\/td><\/tr><tr><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/loc.svg' alt='details icon'><\/td> <td>Huntington Beach, CA 92649<\/td><\/tr></table><a class='get-direction-btn' target='_blank' href='https://goo.gl/maps/Vg8zNXQErstEpwLZ7'> Get Directions <img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/arrow-right_.svg' alt='direction arrow'><\/a>","","Distribution"],
                ["RICHMOND","37.96848","-122.36765","RICHMOND","<table><tr><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/box.svg' alt='details icon'><\/td> <td>255 Parr Blvd Suite 220<\/td><\/tr><tr><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/loc.svg' alt='details icon'><\/td> <td>Richmond, CA 94801<\/td><\/tr></table><a class='get-direction-btn' target='_blank' href='https://goo.gl/maps/Vg8zNXQErstEpwLZ7'> Get Directions <img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/arrow-right_.svg' alt='direction arrow'><\/a>","","Distribution"],
                ["SAN FRANCISCO","37.96848","-122.36765","SAN FRANCISCO","<table><tr><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/box.svg' alt='details icon'><\/td> <td>Pier 50<\/td><\/tr><tr><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/loc.svg' alt='details icon'><\/td> <td>San Francisco, CA 94158<\/td><\/tr></table><a class='get-direction-btn' target='_blank' href='https://goo.gl/maps/AN2uybwwdJVvufhPA'> Get Directions <img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/arrow-right_.svg' alt='direction arrow'><\/a>","","Distribution"],
                ["TERMINAL ISLAND","33.73506","-118.26905","TERMINAL ISLAND","<table><tr><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/box.svg' alt='details icon'><\/td> <td>1028 SSeaside Ave<\/td><\/tr><tr><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/loc.svg' alt='details icon'><\/td> <td>Terminal Island, CA 90731<\/td><\/tr></table><a class='get-direction-btn' target='_blank' href='https://goo.gl/maps/7Uvy7giYpSznzsaS9'> Get Directions <img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/arrow-right_.svg' alt='direction arrow'><\/a>","","Distribution"],
                ["FORT LUPTON","40.03271","-104.81100","FORT LUPTON","<table><tr><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/box.svg' alt='details icon'><\/td><td>2211 South Denver Ave.<\/td><\/tr><tr><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/loc.svg' alt='details icon'><\/td> <td>Fort Lupton, CO 80621<\/td><\/tr></table><a class='get-direction-btn' target='_blank' href='https://goo.gl/maps/VztoP8yVBKYqZ1619'> Get Directions <img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/arrow-right_.svg' alt='direction arrow'><\/a>","","Distribution"],
                ["BURLEY","42.56131","-113.78805","BURLEY","<table><tr><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/phone-icon.svg' alt='details icon'><\/td> <td><a>208.678.5321<\/td><\/tr><tr><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/box.svg' alt='details icon'><\/td><td>445 East 5th St. North #1<\/td><\/tr><tr><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/loc.svg' alt='details icon'><\/td> <td>Burley, ID 83318<\/td><\/tr></table><a class='get-direction-btn' target='_blank' href='https://goo.gl/maps/kcVaAB6FZMuDP8Yx8'> Get Directions <img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/arrow-right_.svg' alt='direction arrow'><\/a>","","Distribution"],
                ["BOSSIER CITY","32.54358","-93.68656","BOSSIER CITY","<table><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/box.svg' alt='details icon'><\/td><td>3907 Shed Road<\/td><\/tr><tr><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/loc.svg' alt='details icon'><\/td> <td>Bossier City, LA 71111<\/td><\/tr></table><a class='get-direction-btn' target='_blank' href='https://goo.gl/maps/RkQiPii9qVjeEvBz8'> Get Directions <img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/arrow-right_.svg' alt='direction arrow'><\/a>","","Distribution"],
                ["BROUSSARD","30.07607","-91.93534","BROUSSARD","<table><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/box.svg' alt='details icon'><\/td><td>1306 Petroleum Parkway<\/td><\/tr><tr><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/loc.svg' alt='details icon'><\/td> <td> Broussard, LA 70518<\/td><\/tr></table><a class='get-direction-btn' target='_blank' href='https://goo.gl/maps/CB1p5Qqchihp7n7WA'> Get Directions <img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/arrow-right_.svg' alt='direction arrow'><\/a>","","Distribution"],
                ["BALTIMORE","39.26793","-76.62994","BALTIMORE","<table><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/box.svg' alt='details icon'><\/td><td>915 Annapolis Road<\/td><\/tr><tr><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/loc.svg' alt='details icon'><\/td> <td>Baltimore, MD 21230<\/td><\/tr></table><a class='get-direction-btn' target='_blank' href='https://goo.gl/maps/Pfkz3P1u4jmxrv7n6'> Get Directions <img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/arrow-right_.svg' alt='direction arrow'><\/a>","","Distribution"],
                ["CALIENTE","37.61903","-114.51063","CALIENTE","<table><tr><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/phone-icon.svg' alt='phone icon'><\/td> <td><a>775.726.3774<\/a><\/td><\/tr><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/box.svg' alt='details icon'><\/td><td>25 Spring St<\/td><\/tr><tr><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/loc.svg' alt='details icon'><\/td> <td>Caliente, NV 89008<\/td><\/tr></table><a class='get-direction-btn' target='_blank' href='https://goo.gl/maps/DwWjXA862uKKXtje9'> Get Directions <img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/arrow-right_.svg' alt='direction arrow'><\/a>","","Distribution"],
                ["CARLIN","40.71404","-116.10398","CARLIN","<table><tr><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/phone-icon.svg' alt='phone icon'><\/td> <td><a>775.754.6765<\/a><\/td><\/tr><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/box.svg' alt='details icon'><\/td><td>3025 Griffin Street<\/td><\/tr><tr><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/loc.svg' alt='details icon'><\/td> <td>Carlin, NV 89822<\/td><\/tr></table><a class='get-direction-btn' target='_blank' href='https://goo.gl/maps/DwWjXA862uKKXtje9'> Get Directions <img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/arrow-right_.svg' alt='direction arrow'><\/a>","","Distribution"],
                ["LAS VEGAS","36.24888","-115.04425","LAS VEGAS","<table><tr><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/phone-icon.svg' alt='phone icon'><\/td> <td><a>702.635.3899<\/a><\/td><\/tr><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/box.svg' alt='details icon'><\/td><td>4825 North Sloan Lane<\/td><\/tr><tr><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/loc.svg' alt='details icon'><\/td><td>Las Vegas, NV 89115<\/td><\/tr></table><a class='get-direction-btn' target='_blank' href='https://goo.gl/maps/myRzNDGF3gE8NkHK8'> Get Directions <img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/arrow-right_.svg' alt='direction arrow'><\/a>","","Distribution"],
                ["RENO / SPARKS","39.52428","-119.74115","RENO / SPARKS","<table><tr><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/phone-icon.svg' alt='phone icon'><\/td> <td><a>775.829.1097<\/a><\/td><\/tr><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/box.svg' alt='details icon'><\/td><td>995 SMcCarran Blvd, Ste 103<\/td><\/tr><tr><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/loc.svg' alt='details icon'><\/td><td>Sparks, NV 89431<\/td><\/tr></table><a class='get-direction-btn' target='_blank' href='https://goo.gl/maps/8h96cmcyC8GZPmA69'> Get Directions <img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/arrow-right_.svg' alt='direction arrow'><\/a>","","Distribution"],                
                ["ARTESIA","32.85759","-104.40384","ARTESIA","<table><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/box.svg' alt='details icon'><\/td><td>606 WRichey<\/td><\/tr><tr><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/loc.svg' alt='details icon'><\/td><td>Artesia, NM 88210<\/td><\/tr></table><a class='get-direction-btn' target='_blank' href='https://goo.gl/maps/uyEE7zbeQtNLL9XC9'> Get Directions <img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/arrow-right_.svg' alt='direction arrow'><\/a>","","Distribution"],
                ["BLOOMFIELD","36.73533","-107.97975","BLOOMFIELD","<table><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/box.svg' alt='details icon'><\/td><td>1713 N 1st St<\/td><\/tr><tr><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/loc.svg' alt='details icon'><\/td><td>Bloomfield, NM 87413<\/td><\/tr></table><a class='get-direction-btn' target='_blank' href='https://goo.gl/maps/kAXStduxhokqFnYL9'> Get Directions <img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/arrow-right_.svg' alt='direction arrow'><\/a>","","Distribution"],
                ["WILLISTON","48.18792","-103.62865","WILLISTON","<table><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/box.svg' alt='details icon'><\/td><td>403 47th Street West<\/td><\/tr><tr><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/loc.svg' alt='details icon'><\/td><td>Williston, ND 58801<\/td><\/tr></table><a class='get-direction-btn' target='_blank' href='https://goo.gl/maps/tPjqCHUHdHB1cbRx6'> Get Directions <img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/arrow-right_.svg' alt='direction arrow'><\/a>","","Distribution"],
                ["LOUISVILLE","40.82652","-81.29432","LOUISVILLE","<table><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/box.svg' alt='details icon'><\/td><td>3652 Tulane Ave<\/td><\/tr><tr><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/loc.svg' alt='details icon'><\/td><td>Louisville, OH 44641<\/td><\/tr></table><a class='get-direction-btn' target='_blank' href='https://goo.gl/maps/6NScSP1aiT8xjcXD7'> Get Directions <img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/arrow-right_.svg' alt='direction arrow'><\/a>","","Distribution"],
                ["OKLAHOMA CITY","35.50141","-97.88798","OKLAHOMA CITY","<table><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/box.svg' alt='details icon'><\/td><td>5800 SH 66<\/td><\/tr><tr><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/loc.svg' alt='details icon'><\/td><td>Baltimore, MD 21230915 Annapolis Road<\/td><\/tr></table><a class='get-direction-btn' target='_blank' href='https://goo.gl/maps/Y6Cv2FCkwJBkZ9ap9'> Get Directions <img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/arrow-right_.svg' alt='direction arrow'><\/a>","","Distribution"],
                ["SAYRE","36.24888","-115.04425","SAYRE","<table><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/box.svg' alt='details icon'><\/td><td>207 S 9th St<\/td><\/tr><tr><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/loc.svg' alt='details icon'><\/td><td> Sayre, OK 73662<\/td><\/tr></table><a class='get-direction-btn' target='_blank' href='https://goo.gl/maps/myRzNDGF3gE8NkHK8'> Get Directions <img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/arrow-right_.svg' alt='direction arrow'><\/a>","","Distribution"],
                ["WOODWARD","36.43043","-99.44128","WOODWARD","<table><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/box.svg' alt='details icon'><\/td><td>4521 Industrial Park Rd<\/td><\/tr><tr><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/loc.svg' alt='details icon'><\/td><td> Woodward, OK 73801<\/td><\/tr></table><a class='get-direction-btn' target='_blank' href='https://goo.gl/maps/Us1iGgY7k32aVNPG6'> Get Directions <img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/arrow-right_.svg' alt='direction arrow'><\/a>","","Distribution"],
                ["PORTLAND","45.55609","-122.62282","PORTLAND","<table><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/box.svg' alt='details icon'><\/td><td>206.623.3480<\/td><\/tr></table><a class='get-direction-btn' target='_blank' href='https://goo.gl/maps/9xBPxbh2mtFJdMbg8'> Get Directions <img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/arrow-right_.svg' alt='direction arrow'><\/a>","","Distribution"],
                ["MONTOURSVILLE","41.25139","-76.89220","MONTOURSVILLE","<table><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/box.svg' alt='details icon'><\/td><td>120 Choate Cir<\/td><\/tr><tr><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/loc.svg' alt='details icon'><\/td><td>Montoursville, PA 17754<\/td><\/tr></table><a class='get-direction-btn' target='_blank' href='https://goo.gl/maps/HjBgLf8tqRnGFW6dA'> Get Directions <img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/arrow-right_.svg' alt='direction arrow'><\/a>","","Distribution"],
                ["PHILADELPHIA","40.07072","-74.95217","PHILADELPHIA","<table><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/box.svg' alt='details icon'><\/td><td>1750 Woodhaven Dr<\/td><\/tr><tr><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/loc.svg' alt='details icon'><\/td><td>Montoursville, PA 17754<\/td><\/tr></table><a class='get-direction-btn' target='_blank' href='https://goo.gl/maps/JGzL8JfcuLRZHChUA'> Get Directions <img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/arrow-right_.svg' alt='direction arrow'><\/a>","","Distribution"],
                ["BEAUMONT","29.94674","-94.03793","BEAUMONT","<table><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/box.svg' alt='details icon'><\/td><td>11703 W Port Arthur Rd<\/td><\/tr><tr><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/loc.svg' alt='details icon'><\/td><td>Beaumont, TX 77705<\/td><\/tr></table><a class='get-direction-btn' target='_blank' href='https://goo.gl/maps/M5YecLbEqWq3f5z57'> Get Directions <img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/arrow-right_.svg' alt='direction arrow'><\/a>","","Distribution"],
                ["BRIDGEPORT","33.19665","-97.75473","BRIDGEPORT","<table><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/box.svg' alt='details icon'><\/td><td>313 Industrial Street<\/td><\/tr><tr><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/loc.svg' alt='details icon'><\/td><td>Bridgeport, TX 76426<\/td><\/tr></table><a class='get-direction-btn' target='_blank' href='https://goo.gl/maps/uLocySyqCFijtmF78'> Get Directions <img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/arrow-right_.svg' alt='direction arrow'><\/a>","","Distribution"],
                ["KILGORE","33.19665","-97.75473","KILGORE","<table><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/box.svg' alt='details icon'><\/td><td>1915 Hwy 135 N<\/td><\/tr><tr><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/loc.svg' alt='details icon'><\/td><td>Kilgore, TX 75662<\/td><\/tr></table><a class='get-direction-btn' target='_blank' href='https://goo.gl/maps/XKbEinReFQWmZTCt8'> Get Directions <img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/arrow-right_.svg' alt='direction arrow'><\/a>","","Distribution"],
                ["LAGRANGE","29.91214","-96.94386","LAGRANGE","<table><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/box.svg' alt='details icon'><\/td><td>450 Airport Road<\/td><\/tr><tr><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/loc.svg' alt='details icon'><\/td><td>Lagrange, TX 78945<\/td><\/tr></table><a class='get-direction-btn' target='_blank' href='https://goo.gl/maps/dTAWZyEXUtNmxdePA'> Get Directions <img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/arrow-right_.svg' alt='direction arrow'><\/a>","","Distribution"],
                 ["LAREDO","27.68418","-99.45621","LAREDO","<table><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/box.svg' alt='details icon'><\/td><td>13497 Port Drive<\/td><\/tr><tr><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/loc.svg' alt='details icon'><\/td><td>Laredo, TX 78041<\/td><\/tr></table><a class='get-direction-btn' target='_blank' href='https://goo.gl/maps/tqCfgfAwqQZAiENu7'> Get Directions <img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/arrow-right_.svg' alt='direction arrow'><\/a>","","Distribution"],
                 ["ODESSA (ANDREWS HIGHWAY)","31.94799","-102.40694","ODESSA (ANDREWS HIGHWAY)","<table><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/box.svg' alt='details icon'><\/td><td>9421 Andrews Hwy<\/td><\/tr><tr><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/loc.svg' alt='details icon'><\/td><td>Odessa, TX 79765<\/td><\/tr></table><a class='get-direction-btn' target='_blank' href='https://goo.gl/maps/wg975eYkm1nrM8xf6'> Get Directions <img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/arrow-right_.svg' alt='direction arrow'><\/a>","","Distribution"],
                ["ODESSA (I-20)","31.90818","-102.22448","ODESSA (I-20)","<table><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/box.svg' alt='details icon'><\/td><td>10918 E Interstate 20<\/td><\/tr><tr><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/loc.svg' alt='details icon'><\/td><td>Odessa, TX 79765<\/td><\/tr></table><a class='get-direction-btn' target='_blank' href='https://goo.gl/maps/pSKW6SZq6Y8Uiocj6'> Get Directions <img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/arrow-right_.svg' alt='direction arrow'><\/a>","","Distribution"],
                ["ROBSTOWN","27.83418","-97.62534","ROBSTOWN","<table><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/box.svg' alt='details icon'><\/td><td>4632 Daniel Drive<\/td><\/tr><tr><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/loc.svg' alt='details icon'><\/td><td>Robstown, TX 78380<\/td><\/tr></table><a class='get-direction-btn' target='_blank' href='https://goo.gl/maps/7g3W34X6udnaxgeT9'> Get Directions <img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/arrow-right_.svg' alt='direction arrow'><\/a>","","Distribution"],
                ["SAN ANTONIO","29.44312","-98.37123","SAN ANTONIO","<table><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/box.svg' alt='details icon'><\/td><td>5930 Bicentennial St<\/td><\/tr><tr><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/loc.svg' alt='details icon'><\/td><td>San Antonio, TX 78219<\/td><\/tr></table><a class='get-direction-btn' target='_blank' href='https://goo.gl/maps/ab9L6iQPVeZ6bjtTA'> Get Directions <img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/arrow-right_.svg' alt='direction arrow'><\/a>","","Distribution"],
                ["SEMINOLE","32.72724","-102.93932","SEMINOLE","<table><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/box.svg' alt='details icon'><\/td><td>1891 US Hwy 62/180<\/td><\/tr><tr><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/loc.svg' alt='details icon'><\/td><td>Seminole, TX 79360<\/td><\/tr></table><a class='get-direction-btn' target='_blank' href='https://goo.gl/maps/f2oyrhs1yAssqf9WA'> Get Directions <img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/arrow-right_.svg' alt='direction arrow'><\/a>","","Distribution"],
                ["TYLER","32.38860","-95.26895","TYLER","<table><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/box.svg' alt='details icon'><\/td><td>1510 E Northeast Loop 323<\/td><\/tr><tr><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/loc.svg' alt='details icon'><\/td><td>Tyler, TX 75708<\/td><\/tr></table><a class='get-direction-btn' target='_blank' href='https://goo.gl/maps/CyBhtYWrr4wZnZR48'> Get Directions <img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/arrow-right_.svg' alt='direction arrow'><\/a>","","Distribution"],
                ["VICTORIA","28.82275","-96.92140","VICTORIA","<table><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/box.svg' alt='details icon'><\/td><td>9701 US Hwy 59 N<\/td><\/tr><tr><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/loc.svg' alt='details icon'><\/td><td>Victoria, TX 77905<\/td><\/tr></table><a class='get-direction-btn' target='_blank' href='https://goo.gl/maps/Rs25kwbhQ1vKEe938'> Get Directions <img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/arrow-right_.svg' alt='direction arrow'><\/a>","","Distribution"],
                ["LOGAN","41.73533","-111.86240","LOGAN","<table><tr><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/phone-icon.svg' alt='phone icon'><\/td><td><a href='tel:8332684488'>833.268.4488<\/a><\/td><\/tr><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/box.svg' alt='details icon'><\/td><td>1070 West 200 North<\/td><\/tr><tr><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/loc.svg' alt='details icon'><\/td><td>Victoria, TX 77905<\/td><\/tr></table><a class='get-direction-btn' target='_blank' href='https://goo.gl/maps/hzk8TFVU6upegDT8A'> Get Directions <img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/arrow-right_.svg' alt='direction arrow'><\/a>","","Distribution"],
                ["NORTH SALT LAKE","40.86272","-111.90378","NORTH SALT LAKE","<table><tr><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/phone-icon.svg' alt='phone icon'><\/td><td><a href='tel:8013978332'>801.397.8332<\/a><\/td><\/tr><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/box.svg' alt='details icon'><\/td><td>1070 West 200 North<\/td><\/tr><tr><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/loc.svg' alt='details icon'><\/td><td>North Salt Lake, UT 84054<\/td><\/tr></table><a class='get-direction-btn' target='_blank' href='https://goo.gl/maps/GH29ZCwaxo7r7hB1A'> Get Directions <img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/arrow-right_.svg' alt='direction arrow'><\/a>","","Distribution"],
                ["PRICE","39.60141","-110.81558","PRICE","<table><tr><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/phone-icon.svg' alt='phone icon'><\/td><td><a href='tel:4356370094'>435.637.0094<\/a><\/td><\/tr><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/box.svg' alt='details icon'><\/td><td>352 West 100 North Main<\/td><\/tr><tr><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/loc.svg' alt='details icon'><\/td><td>Price, UT 84501<\/td><\/tr></table><a class='get-direction-btn' target='_blank' href='https://goo.gl/maps/qgWTwRKz4dvbw9nW6'> Get Directions <img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/arrow-right_.svg' alt='direction arrow'><\/a>","","Distribution"],
                ["ST. GEORGE","37.12173","-113.55541","ST. GEORGE","<table><tr><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/phone-icon.svg' alt='phone icon'><\/td><td><a href='tel:4356278366'>435.627.8366<\/a><\/td><\/tr><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/box.svg' alt='details icon'><\/td><td>845 N Industrial Rd<\/td><\/tr><tr><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/loc.svg' alt='details icon'><\/td><td>St George, UT 84770<\/td><\/tr></table><a class='get-direction-btn' target='_blank' href='https://goo.gl/maps/3TeiCPknEJdidNMq7'> Get Directions <img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/arrow-right_.svg' alt='direction arrow'><\/a>","","Distribution"],
                ["SEATTLE","47.58718","-122.35280","SEATTLE","<table><tr><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/phone-icon.svg' alt='phone icon'><\/td><td><a href='tel:2066233480'>206.623.3480<\/a><\/td><\/tr><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/box.svg' alt='details icon'><\/td><td>1711 13th Ave SW<\/td><\/tr><tr><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/loc.svg' alt='details icon'><\/td><td>Seattle, WA 98134<\/td><\/tr></table><a class='get-direction-btn' target='_blank' href='https://goo.gl/maps/xW3auGZJTjWRoaru8'> Get Directions <img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/arrow-right_.svg' alt='direction arrow'><\/a>","","Distribution"],
                ["NITRO","38.42516","-81.84854","NITRO","<table><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/box.svg' alt='details icon'><\/td><td>200 Viscose Rd<\/td><\/tr><tr><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/loc.svg' alt='details icon'><\/td><td>Nitro, WV 25143<\/td><\/tr></table><a class='get-direction-btn' target='_blank' href='https://goo.gl/maps/2c9fdD3cMJnjnMph7'> Get Directions <img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/arrow-right_.svg' alt='direction arrow'><\/a>","","Distribution"],
                ["MORGANTOWN","39.57582","-79.97138","MORGANTOWN","<table><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/box.svg' alt='details icon'><\/td><td> 494 Four H Camp Rd<\/td><\/tr><tr><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/loc.svg' alt='details icon'><\/td><td>Morgantown, WV 26508<\/td><\/tr></table><a class='get-direction-btn' target='_blank' href='https://goo.gl/maps/ggfzYgUThwVVR79T9'> Get Directions <img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/arrow-right_.svg' alt='direction arrow'><\/a>","","Distribution"],
                ["ROCK SPRINGS","41.61826","-109.23438","ROCK SPRINGS","<table><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/box.svg' alt='details icon'><\/td><td> 151 Industrial Drive<\/td><\/tr><tr><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/loc.svg' alt='details icon'><\/td><td>Rock Springs, WY 82901<\/td><\/tr></table><a class='get-direction-btn' target='_blank' href='https://goo.gl/maps/UaXySkR7GhnqEQd8A'> Get Directions <img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/arrow-right_.svg' alt='direction arrow'><\/a>","","Distribution"],
                
              ["GRAPEVINE DFW","32.91816","-97.08031","GRAPEVINE DFW","<table><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/box.svg' alt='pobox icon'><\/td><td>GRAPEVINE DFW<\/td><\/tr><tr><td><img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/loc.svg' alt='details icon'><\/td> <td>Grapevine, TX 76051<\/td><\/tr></table><a class='get-direction-btn' target='_blank' href='https://goo.gl/maps/Fv6X5hPy8zhpjHhf9'>Get Directions <img src='https:\/\/mohammadharoon.com\/demo\/map-icons\/arrow-right_.svg' alt='direction arrow'><\/a>","","Corporate Office"],
    
    ]
    jQuery(locations).each(function(i, el){
        jQuery('#results').append('<div class="location-drowpdown-title" data-class="' +el[6]+ '"><div class="location-tag">' +el[0]+ '</div><a href="#" class="location-btn w-button">' +el[6]+ '</a></div><div class="location-dropdown-list"><div class="address-location">' +el[4]+ '</div></div>');

    })
    var CustomMapStyles = [
      {
          "featureType": "all",
          "elementType": "labels",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "administrative",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "simplified"
              },
              {
                  "color": "#5b6571"
              },
              {
                  "lightness": "35"
              }
          ]
      },
      {
          "featureType": "administrative",
          "elementType": "labels",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "administrative.country",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "simplified"
              }
          ]
      },
      {
          "featureType": "administrative.country",
          "elementType": "labels",
          "stylers": [
              {
                  "visibility": "simplified"
              }
          ]
      },
      {
          "featureType": "administrative.country",
          "elementType": "labels.text",
          "stylers": [
              {
                  "visibility": "simplified"
              }
          ]
      },
      {
          "featureType": "administrative.country",
          "elementType": "labels.text.fill",
          "stylers": [
              {
                  "visibility": "on"
              }
          ]
      },
      {
          "featureType": "administrative.province",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "simplified"
              }
          ]
      },
      {
          "featureType": "administrative.province",
          "elementType": "geometry.fill",
          "stylers": [
              {
                  "visibility": "simplified"
              }
          ]
      },
      {
          "featureType": "administrative.province",
          "elementType": "labels",
          "stylers": [
              {
                  "visibility": "on"
              }
          ]
      },
      {
          "featureType": "administrative.province",
          "elementType": "labels.text",
          "stylers": [
              {
                  "visibility": "on"
              }
          ]
      },
      {
          "featureType": "administrative.province",
          "elementType": "labels.text.fill",
          "stylers": [
              {
                  "visibility": "simplified"
              }
          ]
      },
      {
          "featureType": "administrative.province",
          "elementType": "labels.text.stroke",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "administrative.province",
          "elementType": "labels.icon",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "administrative.locality",
          "elementType": "labels",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "administrative.locality",
          "elementType": "labels.text",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "administrative.locality",
          "elementType": "labels.text.fill",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "administrative.neighborhood",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "administrative.neighborhood",
          "elementType": "labels.text",
          "stylers": [
              {
                  "visibility": "simplified"
              }
          ]
      },
      {
          "featureType": "administrative.neighborhood",
          "elementType": "labels.text.fill",
          "stylers": [
              {
                  "visibility": "simplified"
              }
          ]
      },
      {
          "featureType": "administrative.land_parcel",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "simplified"
              }
          ]
      },
      {
          "featureType": "landscape",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "on"
              },
              {
                  "color": "#f3f4f4"
              }
          ]
      },
      {
          "featureType": "landscape.man_made",
          "elementType": "geometry",
          "stylers": [
              {
                  "weight": 0.9
              },
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "landscape.natural",
          "elementType": "labels",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "poi.park",
          "elementType": "geometry.fill",
          "stylers": [
              {
                  "visibility": "on"
              },
              {
                  "color": "#e2e2e2"
              }
          ]
      },
      {
          "featureType": "road",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "on"
              },
              {
                  "color": "#ffffff"
              }
          ]
      },
      {
          "featureType": "road",
          "elementType": "labels",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "road.highway",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "on"
              },
              {
                  "color": "#fee379"
              }
          ]
      },
      {
          "featureType": "road.highway",
          "elementType": "geometry",
          "stylers": [
              {
                  "visibility": "on"
              }
          ]
      },
      {
          "featureType": "road.highway",
          "elementType": "labels",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "road.highway",
          "elementType": "labels.icon",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "road.highway.controlled_access",
          "elementType": "labels.icon",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "road.arterial",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "simplified"
              },
              {
                  "color": "#ffffff"
              }
          ]
      },
      {
          "featureType": "road.arterial",
          "elementType": "labels",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "road.arterial",
          "elementType": "labels.icon",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "water",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "on"
              },
              {
                  "color": "#7fc8ed"
              }
          ]
      }
    ];
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 6,
        center: new google.maps.LatLng(25.390641867087513, 46.66710960188105),
        mapTypeId: 'roadmap',
        mapTypeControl: false,
        // zoomControlOptions: {
        //   position: google.maps.ControlPosition.LEFT_CENTER,
        // },
        panControl: true,
        streetViewControl: true,
        styles: CustomMapStyles
    });

    infowindow = new google.maps.InfoWindow();
    var marker, i;
    var bounds = new google.maps.LatLngBounds();

    for (i = 0; i < locations.length; i++) {  

        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            city: locations[i][0],
            map: map,
            animation: google.maps.Animation.DROP,
            icon: "http://mohammadharoon.com/demo/map-icons/map-marker-black.svg",
            locationType: locations[i][6],
        });
        bounds.extend(marker.position);

        gmarkers1.push(marker);

        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                var html = "<div><strong>"+locations[i][3]+"</strong><span>"+locations[i][4]+"</span>"+locations[i][5]+"</div>";
                infowindow.setContent(html);
                infowindow.open(map, marker, html);
                map.panTo(this.getPosition());
                // map.setZoom(13);
            }
        })(marker, i));
      
        google.maps.event.addListener(marker, 'map_changed', function() {

            infowindow.close()
        });
    } // for loop

    map.fitBounds(bounds);
    
}

function fitToMarkers(markers) {

    var bounds = new google.maps.LatLngBounds();

    // Create bounds from markers
    for( var index in markers ) {
        var latlng = markers[index].getPosition();
        bounds.extend(latlng);
    }

    // Don't zoom in too far on only one marker
    if (bounds.getNorthEast().equals(bounds.getSouthWest())) {
       var extendPoint1 = new google.maps.LatLng(bounds.getNorthEast().lat() + 0.01, bounds.getNorthEast().lng() + 0.01);
       var extendPoint2 = new google.maps.LatLng(bounds.getNorthEast().lat() - 0.01, bounds.getNorthEast().lng() - 0.01);
       bounds.extend(extendPoint1);
       bounds.extend(extendPoint2);
    }
    map.fitBounds(bounds);
}

jQuery(document).ready(function($) {
    setTimeout(function(){
        $(".all-locations").trigger('click');
    }, 1000);
    function loadBranches(){
        //$('.map-corporate-office').addClass('active');
        map.setZoom(6);
  
        var filteredMarkers = [];
        for (i = 0; i < gmarkers1.length; i++) {
            marker = gmarkers1[i];

            if (marker.locationType=="Corporate Office"){

                marker.setVisible(true);
                filteredMarkers.push(marker);
                // bounds.extend(marker.position);
                marker.icon = "http://mohammadharoon.com/demo/map-icons/map-marker-black.svg";
            }
            // Categories don't match 
            else {
                marker.setVisible(false);
            }
        }
  
        // map.fitBounds(bounds);
      
        setTimeout(function(){

            if (  filteredMarkers.length == 0 ){
                  
              console.log("No Branch Found!");

            }else{

              fitToMarkers(filteredMarkers);
            }
        }, 500);

        return false;
    }

    loadBranches()

    $('.map-corporate-office').click(function(e){
        var getID =  $(this).attr('data-id');
        $('.location').slideUp();
        $('#'+getID).slideDown();
        $('#results').attr('class', '');
        $('#results').show().addClass(getID);
        $('.map-btn').removeClass('current');
        $('.map-corporate-office').addClass('current');
        e.preventDefault();
        loadBranches()
    })

  
    $('.map-marine').click(function(e){
        var getID =  $(this).attr('data-id');
        $('.location').slideUp();
        $('#'+getID).slideDown();
        $('#results').attr('class', '');
        $('#results').show().addClass(getID);
        $('.map-btn').removeClass('current');
        $('.map-marine').addClass('current');
        e.preventDefault();
        // if($(this).hasClass('active')){
        //     return;
        // }

        if (infowindow) {
          infowindow.close();
        } 

        map.setZoom(6);
    
        var filteredMarkers = [];
        for (i = 0; i < gmarkers1.length; i++) {
            marker = gmarkers1[i];

            if (marker.locationType=="Marine"){

                  marker.setVisible(true);
                  filteredMarkers.push(marker);
                  // bounds.extend(marker.position);
                  marker.icon = "http://mohammadharoon.com/demo/map-icons/map-marker-blue.svg";
            }
            // Categories don't match 
            else {
                  marker.setVisible(false);
            }
        }
    
        // map.fitBounds(bounds);
        
        setTimeout(function(){

            if (  filteredMarkers.length == 0 ){
                  
              console.log("No Center Found!");

            }else{

              fitToMarkers(filteredMarkers);
            }
        }, 500);

        return false;
    })

    $('.map-distribution').click(function(e){
        var getID =  $(this).attr('data-id');
        $('.location').slideUp();
        $('#'+getID).slideDown();
        $('#results').attr('class', '');
        $('#results').show().addClass(getID);
        $('.map-btn').removeClass('current');
        $('.map-distribution').addClass('current');
        e.preventDefault();
        // if($(this).hasClass('active')){
        //     return;
        // }

        if (infowindow) {
          infowindow.close();
        } 

        map.setZoom(6);
    
        var filteredMarkers = [];
        for (i = 0; i < gmarkers1.length; i++) {
            marker = gmarkers1[i];

            if (marker.locationType=="Distribution"){

                  marker.setVisible(true);
                  filteredMarkers.push(marker);
                  // bounds.extend(marker.position);
                  marker.icon = "http://mohammadharoon.com/demo/map-icons/map-marker-red.svg";
            }
            // Categories don't match 
            else {
                marker.setVisible(false);
            }
        }
    
        // map.fitBounds(bounds);
        
        setTimeout(function(){

            if (  filteredMarkers.length == 0 ){
                  
              console.log("No Warehouse Found!");

            }else{

              fitToMarkers(filteredMarkers);
            }
        }, 500);

        return false;
    })

    $('.all-locations').click(function(e){
        // var getID =  $(this).attr('data-id');
        // $('.location').slideUp();
        // $('#'+getID).slideDown();
        $('.map-btn').removeClass('current');
        $('#results').hide();
        $('.all-locations').addClass('current');
        e.preventDefault();

        if (infowindow) {
          infowindow.close();
        } 

        map.setZoom(3);
    
        var filteredMarkers = [];
        for (i = 0; i < gmarkers1.length; i++) {
            marker = gmarkers1[i];

            if (marker.locationType=="Distribution"){
                marker.icon = "http://mohammadharoon.com/demo/map-icons/map-marker-red.svg";
            }else if (marker.locationType=="Corporate Office"){
                marker.icon = "http://mohammadharoon.com/demo/map-icons/map-marker-black.svg";
            }else if (marker.locationType=="Marine"){
                marker.icon = "http://mohammadharoon.com/demo/map-icons/map-marker-blue.svg";
            }
            marker.setVisible(true);
        }
    
        // map.fitBounds(bounds);
        
        setTimeout(function(){

            if (  filteredMarkers.length == 0 ){
                  
              console.log("No Warehouse Found!");

            }else{

              fitToMarkers(filteredMarkers);
            }
        }, 500);

        return false;
    });

    $('.location-drowpdown-title').click(function(){
        $(this).next().slideToggle()
        $('.location-drowpdown-title').not(this).next().slideUp()
    })
    // $('.all-locations').click(function() {
    //    $('.location').slideUp(); 
    // });

});
</script>

</div>

<script type='text/javascript' src='https://maps.googleapis.com/maps/api/js?key=AIzaSyD65PgtKnd61klUPUj5yV4k5AL-dmTK12g&#038;callback=initMap&#038;ver=5.9.3' id='google-map-api-js'></script>

</body>
</html>
<!--Generated by Endurance Page Cache-->