<?php
add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles' );
function theme_enqueue_styles() {
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
    wp_enqueue_style( 'main-style', get_template_directory_uri() . '/public/wp-content/themes/williamsgroup/assets/css/compiled/styletwo.css' );

}

// Menus
function register_my_menus() {
  register_nav_menus(
    array(
      'header-menu' => __( 'Header Menu' ),
      'footer-menu' => __( 'Footer Menu' )
    )
  );
}
add_action( 'init', 'register_my_menus' );

// SVG fix
function cc_mime_types($mimes) {
  $mimes['svg'] = 'image/svg+xml';
  return $mimes;
}
add_filter('upload_mimes', 'cc_mime_types');


//Page Slug Body Class
function add_body_class( $classes )
{
    global $post;
    if ( isset( $post ) ) {
        $classes[] = $post->post_type . '-' . $post->post_name;
    }
    return $classes;
}
add_filter( 'body_class', 'add_body_class' );




// ==========================================
// Salons Shortcodes
// ==========================================

function salon_purehair_function() {
   echo
   '        <section>
               <div class="salon-wrap grid fade-in-up-effect mtl rule-bottom rule-top">
                   <div class="unit size1of2 mini1of1 mobile1of1 salon-copy pal">
                       <img src="/wp-content/themes/williamsgroup/assets/img/ph_logo.png">
                       <div id="ph_info" class="mts"></div>
                       <a href="http://purehairsherborne.co.uk/"><button class="button">Visit Site</button></a>
                   </div>
                   <div class="unit size1of2 mini1of1 mobile1of1 salon-image"><img src="/wp-content/themes/williamsgroup/assets/img/ph_salon_shot.jpg"></div>
               </div>
           </section>'
   ;
}

function salon_unisex_function() {
   echo
   '        <section>
               <div class="salon-wrap grid fade-in-up-effect mtl rule-bottom rule-top">
                   <div class="unit size1of2 mini1of1 mobile1of1 salon-copy pal">
                       <img src="/wp-content/themes/williamsgroup/assets/img/uni_logo.png">
                       <div id="uni_info" class="mts"></div>
                       <a href="http://unisexyeovil.co.uk/"><button class="button">Visit Site</button></a>
                   </div>
                   <div class="unit size1of2 mini1of1 mobile1of1 salon-image"><img src="/wp-content/themes/williamsgroup/assets/img/uni_salon_shot.jpg"></div>
               </div>
           </section>'
   ;
}

function salon_haircare4u_function() {
   echo
   '        <section>
               <div class="salon-wrap grid fade-in-up-effect mtl rule-bottom rule-top">
                   <div class="unit size1of2 mini1of1 mobile1of1 salon-copy pal">
                       <img src="/wp-content/themes/williamsgroup/assets/img/hc_logo.png">
                       <div id="hc_info" class="mts"></div>
                       <a href="http://hairandcare4u.co.uk/"><button class="button">Visit Site</button></a>
                   </div>
                   <div class="unit size1of2 mini1of1 mobile1of1 salon-image"><img src="/wp-content/themes/williamsgroup/assets/img/hc_salon_shot.jpg"></div>
               </div>
           </section>'
   ;
}

function salon_beautybar_function() {
   echo
   '        <section>
               <div class="salon-wrap grid fade-in-up-effect mtl rule-bottom rule-top">
                   <div class="unit size1of2 mini1of1 mobile1of1 salon-copy pal">
                       <img src="/wp-content/themes/williamsgroup/assets/img/bar_logo.png">
                       <div id="bar_info" class="mts"></div>
                       <a href="http://beautybaryeovil.co.uk/"><button class="button">Visit Site</button></a>
                   </div>
                   <div class="unit size1of2 mini1of1 mobile1of1 salon-image"><img src="/wp-content/themes/williamsgroup/assets/img/bar_salon_shot.jpg"></div>
               </div>
           </section>'
   ;
}

function salon_atouchofbeauty_function() {
   echo
   '        <section>
               <div class="salon-wrap grid fade-in-up-effect mtl rule-bottom rule-top">
                   <div class="unit size1of2 mini1of1 mobile1of1 salon-copy pal">
                       <img src="/wp-content/themes/williamsgroup/assets/img/atob_logo.png">
                       <div id="atob_info" class="mts"></div>
                       <button class="button">Visit Site</button>
                   </div>
                   <div class="unit size1of2 mini1of1 mobile1of1 salon-image"><img src="/wp-content/themes/williamsgroup/assets/img/atob_salon_shot.jpg"></div>
               </div>
           </section>'
   ;
}


function register_shortcodes(){
   add_shortcode('purehair', 'salon_purehair_function');
   add_shortcode('unisex', 'salon_unisex_function');
   add_shortcode('haircare4u', 'salon_haircare4u_function');
   add_shortcode('beautybar', 'salon_beautybar_function');
   // add_shortcode('atouchofbeauty', 'salon_atouchofbeauty_function');
}

add_action( 'init', 'register_shortcodes');
